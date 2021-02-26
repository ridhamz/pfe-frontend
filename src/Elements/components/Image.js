import React, { useRef, useState, useEffect } from 'react';
import './image.css';
import Button from '../../shared/components/formElements/button';
import { useCours } from '../../shared/hooks/cours-hook';


const Image= ({ id, center, onInput, errorText,element, diapoElements  }) => {
    const filePickerRef = useRef();
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const { onChangeElement } = useCours()

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

    const pickHandler = (e) => {
        let pickedFile;
        let fileIsValid = isValid;
        if (e.target.files && e.target.files.length === 1) {
            pickedFile = e.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }
        
        onChangeElement(element,pickedFile, diapoElements)
    }
    return (
      
        <div style={{margin:5}}>
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
            
            <div className={`image-upload ${center && 'center'}`} >
                <div className='image-upload__preview'
                onClick={pickkImageHandler}
                style={{
                    width:element.width ? element.width : 400,
                    height:element.height ? element.height : 200,
               }} >
                    {previewUrl&& <img src={previewUrl} alt='prv' />}
                    {!previewUrl && <p>Please click here to pick an image.</p>}
                </div>
            </div>
      
            {!isValid && <p><small>{errorText}</small></p>}
        </div>
     
    );
}

export default Image;