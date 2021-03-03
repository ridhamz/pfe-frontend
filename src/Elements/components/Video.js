import React, { useRef, useState, useEffect, useContext } from 'react';
import './image.css';
import { useCours } from '../../shared/hooks/cours-hook';

import ReactPlayer from 'react-player'
import {Rnd} from 'react-rnd';
import { CoursContext } from '../../shared/context/cours-context';
import { act } from 'react-dom/test-utils';

const Video= ({ id, center, onInput, errorText,element, diapoElements  }) => {
    const filePickerRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const [position, setPosition] = useState({
        x:0,
        y:0
    }) 
    const [width, setWidth] = useState(400)
    const [height, setHight] = useState(200)
    const [c, setC] = useState(true)

  
    
    const cours = useContext(CoursContext);
            const { changeActiveElement,
                onChangeElement, onChangePosition, 
                onChangeWidth, onChangeHeight, activeElement } = cours;

    const pickVideoHandler = () => {
        if(previewUrl) return
        filePickerRef.current.click();
    }

    useEffect(() => {
        if (!element.file) return;
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(element.file);
    }, [])

    useEffect(() => {
        if (!element.position) return;
       setPosition({...element.position})
    }, [element.position])

    useEffect(() => {
        if (!element.width) return;
       setWidth(element.width)
    }, [element.width])

    useEffect(() => {
        if (!element.height) return;
       setHight(element.height)
    }, [element.height])


    return (
        <Rnd
        
        size={{ width: width,  height: height }}
        position={{ x: position.x, y:position.y }}
        onDrag={(e, d) => {
            setPosition({ x: d.x, y: d.y }) 
            setC(false)
            //onChangePosition(element.id, position, diapoElements)

        }}
        onDragStop={(e, d) => {
             setPosition({ x: d.x, y: d.y }) 
             onChangePosition(element.id, { x: d.x, y: d.y }, diapoElements)
             setC(true)
             }}
        onResize={(e, direction, ref, delta, position) => {
            setWidth(ref.style.width)
            setHight(ref.style.height)
            setPosition({...position})
            
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
            setWidth(ref.style.width)
            setHight(ref.style.height)
            setPosition({...position})
            onChangePosition(element.id, position, diapoElements)
            onChangeWidth(element.id,ref.style.width , diapoElements)
            onChangeHeight(element.id,ref.style.height , diapoElements)
            setC(true)
    
            }}>
      
        <div style={{margin:0}}>
            <input
                id={id}
                ref={filePickerRef}
                type='file'
                style={{ display: 'none' }}
                accept='.mp4'
                onChange={(e) => {           
    
                    const fileReader = new FileReader();
                    fileReader.onload = () => {
                        setPreviewUrl(fileReader.result);
                    }
                    fileReader.readAsDataURL(e.target.files[0]);
                    onChangeElement(element,e, diapoElements)
                }}
               
            />
            
            <div className={`image-upload ${center && 'center'}`} 
            onClick={()=> {{
                if(activeElement && activeElement.id == element .id) return;
                changeActiveElement(element)
            }}}
            style={{
                padding:5 ,
                
                 border : activeElement && activeElement.id == element.id ? "2px dashed #000": "",
            }} >
                <div className='image-upload__preview'
               // onClick={pickVideoHandler}
               onClick={()=> {
                if(activeElement && activeElement.id == element .id) return;
                   changeActiveElement(element)}}
                style={{
                    width: "100%",
                    height:height,
               }} >
                        { previewUrl  && <ReactPlayer  width="100%" 
                        
                        height="100%" controls={c} url={previewUrl} /> }
                    {!previewUrl && <p>Please click here to pick a Video.</p>}
                </div>
            </div>
      
            {!isValid && <p><small>{errorText}</small></p>}
        </div>
        </Rnd>
     
    );
}

export default Video;