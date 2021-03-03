import React from 'react';
import Slide from 'react-reveal/Slide';
import Element from '../Elements/Element';


function Diapo({ numD, diapos, diapoElements }){
  
    return <div  style={{border:"1px solid #000", height:"550px",
                         width: "90%",margin:10}}>
   <Slide left>
    <h2 style={{border:"1px solid #000", margin:5, padding:5}}>Diapo {numD}</h2>
    <div>
        {
             diapoElements.map(element =>{
                if(element.numD == numD)
                 return <Element key={element.numD}
                                 diapoElements={diapoElements} 
                                 element={element} />
                else return "";
            })
        }
    </div>
   </Slide>
    </div>
}

export default Diapo;