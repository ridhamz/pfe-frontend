import React, { useContext, useEffect, useState } from 'react';
import { CoursContext } from '../../shared/context/cours-context';
import {Rnd} from 'react-rnd';


function Cercle({element, diapoElements}){

    const cours = useContext(CoursContext);
    const { changeActiveElement,
        onChangeElement, onChangePosition, 
        onChangeWidth, onChangeHeight, activeElement } = cours;
    const [position, setPosition] = useState({
        x:10,
        y:10
    }) 
    const [width, setWidth] = useState(100)
    const [height, setHight] = useState(100)

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
        pading: 5,
        border :activeElement && activeElement.id == element.id ? "2px dashed #000": ""}}>
    <div style={{height: height,
        background: style.color, borderRadius:"50%"}}
        onClick={()=>{
            if(activeElement && activeElement.id == element .id) return;
            changeActiveElement({...element})}}  >

    </div>
    </div>
    </Rnd>
}

export default Cercle;