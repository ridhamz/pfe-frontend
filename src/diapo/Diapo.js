import React from 'react';
import Slide from 'react-reveal/Slide';

function Diapo({ diapo }){
    return <div  style={{border:"1px solid #000", height:"580px", width: "600px",margin:50}}>
   <Slide left>
   <h1>Diapo {diapo}</h1>
   </Slide>
    </div>
}

export default Diapo;