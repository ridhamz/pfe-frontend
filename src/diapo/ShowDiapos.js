import React, { Fragment } from 'react';
import Slide from 'react-reveal/Slide';

function ShowDiapos({ diapos }){
    return (
        <Fragment>
            {
                diapos.map(item => (
                    <Slide left>
                    <div  style={{border:"1px solid #000", height:"580px", width:"800px", 
                                      width: "600px",margin:50}}>
                      
                      <Slide right>
                       <h1>Diapo {item.numD}</h1>
                       </Slide>
                       </div>
                       </Slide>
                ))
            }
        </Fragment>
    )
   
}

export default ShowDiapos;