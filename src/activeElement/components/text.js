import React, { useContext, useEffect, useState } from 'react';
import { useCours } from '../../shared/hooks/cours-hook';
import { CoursContext } from '../../shared/context/cours-context';

function Text({activeElement}){
    const cours = useContext(CoursContext);
    const {  onChangeStyle, diapoElements, onDeleteElement } = cours;
    const [fontSize, setFontSize] = useState(0);
    const [textAlign, setTextAlign] = useState("left");
    const [color, setColor] = useState("#000")

    useEffect(()=>{
        if(!activeElement) return ;
        setFontSize(activeElement.style.fontSize)
     },[activeElement.style.fontSize])

     useEffect(()=>{
        if(!activeElement) return ;
        setTextAlign(activeElement.style.textAlign)
     },[activeElement.style.textAlign])

     useEffect(()=>{
        if(!activeElement) return ;
        setColor(activeElement.style.color)
     },[activeElement.style.color])


    if(!activeElement) return "";
    let options = []
    for(let i = 1; i <100 ; i++){
          options.push(i)
    }
    return <div style={{ width:"100%", marginTop:10}}>
          
            <div style={{marginTop:20}}>
          Font Size : <select name="fontSize" value={fontSize} 
          onChange={(e)=> {
            setFontSize(e.target.value)
            onChangeStyle(activeElement.id,e.target, diapoElements )
          }}>
              {
                options.map(item => (
                  <option value={item + "px"}>{item}px</option>
                ))
              }
          </select>
          </div>

          <div style={{marginTop:20}}>
          Text Align : <select name="textAlign" value={textAlign} 
          onChange={(e)=> {
            setTextAlign(e.target.value)
            onChangeStyle(activeElement.id,e.target, diapoElements )
          }}>
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
          </select>
          </div>

          <div style={{marginTop:20}}>
          Text Color : <select name="color" value={color} 
          onChange={(e)=> {
            setColor(e.target.value)
            onChangeStyle(activeElement.id,e.target, diapoElements )
          }}>
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">green</option>
          </select>
          </div>

          <div style={{marginTop:20}}>
              <button className="btn btn-danger btn-sm"
              onClick={()=>onDeleteElement(activeElement.id, diapoElements)}
              >Delete</button>
          </div>
    </div>
}

export default Text;