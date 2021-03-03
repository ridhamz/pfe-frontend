import React, { useContext, useEffect, useState } from 'react';
import { CoursContext } from '../../shared/context/cours-context';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {Rnd} from 'react-rnd';
import { unstable_renderSubtreeIntoContainer } from 'react-dom/cjs/react-dom.development';
import { set } from 'lodash';


function Square({element, diapoElements}){

    const cours = useContext(CoursContext);
    const { changeActiveElement,
        onChangeElement, onChangePosition, 
        onChangeWidth, onChangeHeight,activeElement,onDeleteElement } = cours;
    const [position, setPosition] = useState({
        x:10,
        y:10
    }) 
    const [width, setWidth] = useState(100)
    const [height, setHight] = useState(100)

    const [ob, setOb] = useState(width - 10)

    const [value, setValue] = useState()
    const [style, setStyle] = useState({
          color: "#000",
          fontSize: "15px",
          textAlign: "left"
    })
  


        
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
                setStyle({...element.style})
            }, [element.style])
    
   

    return  <Rnd
    size={{ width: width,  height: height }}
    
    position={{ x: position.x, y:position.y }}
    onDrag={(e, d) => {
     setPosition({ x: d.x, y: d.y }) }}

    onDragStop={(e, d) => {
    
    
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
        border : activeElement && activeElement.id == element.id ? "2px dashed #000": "",
        padding:5}}>
    <div style={{ height: height,
        background: style.color}}
        onClick={()=>{
            if(activeElement && activeElement.id == element .id) return;
            changeActiveElement({...element})}} 
        onKeyPress={e => {
            if(e.key === "Backspace"){
               onDeleteElement(activeElement.id, diapoElements)
            }}} >
             
    </div>
   
    </div>
    </Rnd>
}

export default Square;