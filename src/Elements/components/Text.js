import React from 'react';
import { useCours } from '../../shared/hooks/cours-hook';


function Text({ element, diapoElements }){
    const { onChangeElement } = useCours()
    return<div style={{margin:5, border:"1px dashed #000"}}> 
     <textarea onChange={(e)=>onChangeElement(element, e.target.value, diapoElements)}
             rows="2" cols="87" style={{padding:5}}>
        {element.value}
    </textarea>
    </div>
}

export default Text;