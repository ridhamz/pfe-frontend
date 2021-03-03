import React, { useRef, useState, useEffect, useContext } from 'react';
import './image.css';
import Button from '../../shared/components/formElements/button';
import { useCours } from '../../shared/hooks/cours-hook';
import {Rnd} from 'react-rnd';
import { CoursContext } from '../../shared/context/cours-context';



const Video= ({ id, center , element  }) => {
    const filePickerRef = useRef();
    const [previewUrl, setPreviewUrl] = useState();
 

    const cours = useContext(CoursContext);
    const {  onChangeStyle, diapoElements,onDeleteElement, onChangeElement } = cours;

    

    const pickkImageHandler = () => {
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


   

    return (
       
        <div style={{width:"80%"}}>
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
                    onChangeStyle(element.id,e.target, diapoElements, setPreviewUrl)
                }}
               
            />
            
            <div className={`image-upload center'}`} >
                <div className='image-upload__preview'
                onClick={pickkImageHandler}
                style={{
                    marginTop:10,
                    display:"none"
               }} >
                    {previewUrl&& <img src={previewUrl} alt='prv' />}
                    {!previewUrl && <p>Please click here to pick an image.</p>}

                    
                </div>
                <div className="center" style={{margin:5}}>
                    <center>
           
                <button onClick={pickkImageHandler}>Pick A Video</button>
                <div style={{marginTop:20}}>
              <button className="btn btn-danger btn-sm"
              onClick={()=>onDeleteElement(element.id, diapoElements)}
              >Delete</button>
          </div>
                </center>
                </div>
            </div>
        </div>
      
     
    );
}

export default Video;