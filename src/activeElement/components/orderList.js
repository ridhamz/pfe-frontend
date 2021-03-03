import React, { useContext, useEffect, useState } from 'react';
import { useCours } from '../../shared/hooks/cours-hook';
import { CoursContext } from '../../shared/context/cours-context';
import { add } from 'lodash';

function OrderList({activeElement}){
    const cours = useContext(CoursContext);
    const {  onChangeStyle, diapoElements, onDeleteElement, onChangeElement } = cours;
    const [fontSize, setFontSize] = useState(0);
    const [textAlign, setTextAlign] = useState("left");
    const [color, setColor] = useState("#000")
    const [addElement, setAddElement] = useState("")

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
    return <div style={{ width:"100%", marginTop:10}}>
         <div>
           <input type="text" name="option"
          onChange={(e)=> {
            setAddElement(e.target.value) 
           
        }}
            
          value={addElement} style={{width:"50%"}} />
          <button className="btn btn-primary btn-sm" 
           onClick={()=> onChangeElement(activeElement,addElement, diapoElements )}>Add</button>
         </div>
          font Size : <input type="text" name="fontSize"
          onChange={(e)=> {
            setFontSize(e.target.value)
            onChangeStyle(activeElement.id,e.target, diapoElements )
          }}
          value={fontSize} style={{width:"50%"}} />

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

export default OrderList;