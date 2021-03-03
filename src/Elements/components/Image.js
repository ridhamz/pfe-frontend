import React, { useRef, useState, useEffect, useContext } from 'react';
import './image.css';
import Button from '../../shared/components/formElements/button';
import { useCours } from '../../shared/hooks/cours-hook';
import {Rnd} from 'react-rnd';
import { CoursContext } from '../../shared/context/cours-context';
import { act } from 'react-dom/test-utils';



const Image= ({ id, center, onInput, errorText,element, diapoElements  }) => {
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

   


            const cours = useContext(CoursContext);
            const { changeActiveElement,
                onChangeElement, onChangePosition, 
                onChangeWidth, onChangeHeight,
                  activeElement } = cours;

    

    const pickkImageHandler = () => {
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
    }, [element.file])

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
            if(d.x > 365) return "";
                if(d.x < 20) return "";
                if(d.y < 56) return "";
                if(d.y > 250) return "";
            setPosition({ x: d.x, y: d.y }) 
            //onChangePosition(element.id, position, diapoElements)

        }}
        onDragStop={(e, d) => {
          
            if(d.x > 365) return "";
                if(d.x < 20) return "";
                if(d.y < 20) return "";
                if(d.y > 250) return "";
             setPosition({ x: d.x, y: d.y }) 
             onChangePosition(element.id, { x: d.x, y: d.y }, diapoElements)
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
            }}
            >
        <div style={{margin:0}}>
            <input
                id={id}
                ref={filePickerRef}
                type='file'
                style={{ display: 'none' }}
                accept='.jpg, .png, .jpeg'
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
             style={{
                padding:5 ,
                 border : activeElement && activeElement.id == element.id ? "2px dashed #000": "",
            }} >
                <div className='image-upload__preview'
                onClick={pickkImageHandler}
                onClick={()=>{ 
                    if(activeElement && activeElement.id == element .id) return;
                    changeActiveElement(element)}}
                style={{
                    width:"100%",
                    height: height,
               }} >
                    {previewUrl&& <img src={previewUrl} alt='prv' />}
                    {!previewUrl && <p>Please click here to pick an image.</p>}
                </div>
            </div>
      
            {!isValid && <p><small>{errorText}</small></p>}
        </div>
        </Rnd>
     
    );
}

export default Image;