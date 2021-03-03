import React, { useContext, useEffect, useState } from 'react';
import { CoursContext } from '../../shared/context/cours-context';


function Square({ activeElement }){
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
    return <div style={{ width:"100%", marginTop:10}}>

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

export default Square;