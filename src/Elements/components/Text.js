import React, { useContext, useEffect, useState } from 'react';
import { useCours } from '../../shared/hooks/cours-hook';
import {Rnd} from 'react-rnd';
import { CoursContext } from '../../shared/context/cours-context';


function Text({ element, diapoElements }){
    const cours = useContext(CoursContext);
    const { changeActiveElement,
        onChangeElement, onChangePosition, 
        onChangeWidth, onChangeHeight, activeElement } = cours;
    const [position, setPosition] = useState({
        x:10,
        y:10
    }) 
    const [width, setWidth] = useState(600)
    const [height, setHight] = useState(50)

    
    const [value, setValue] = useState()
    const [style, steStyle] = useState({
          color: "#000",
          fontSize: "15px",
          textAlign: "left"
    })
    
    useEffect(() => {
        if (!element.value) return;
       setValue(element.value)
    }, [element.value])
        
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
          
            useEffect(() => {
                if (!element.style) return;
                steStyle({...element.style})
            }, [element.style])


    return  <Rnd
               size={{ width: width,  height: height }}
               position={{ x: position.x, y:position.y }}
               onDrag={(e, d) => {
                if(d.x > 167) return "";
                if(d.x < 6) return "";
                if(d.y < -1) return "";
                if(d.y > 311) return "";
                setPosition({ x: d.x, y: d.y }) }}

               onDragStop={(e, d) => {
               
                if(d.x > 167) return "";
                if(d.x < 6) return "";
                if(d.y < -1) return "";
                if(d.y > 311) return "";
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
        }}>
    
    <div style={{
        padding:5 ,
         border : activeElement && activeElement.id == element.id ? "2px dashed #000": "",
    }}>
     <textarea onChange={(e)=>{ onChangeElement(element, e.target.value, diapoElements)}}
              onClick={()=>{
                if(activeElement && activeElement.id == element .id) return;
                  changeActiveElement({...element})}}     
              style={{padding:5,width: "100%", height:height, resize:"none",
                       color:style.color,
                       fontSize: style.fontSize,
                       textAlign:style.textAlign,
                      }}
                       autoFocus={activeElement && activeElement.id == element.id}>
     {element.value}
    </textarea>
    </div>
    </Rnd>
}

export default Text;