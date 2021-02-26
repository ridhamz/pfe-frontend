import React, { Fragment } from 'react';
import Slide from 'react-reveal/Slide';
import Element from '../Elements/Element';

function ShowDiapos({ diapos, diapoElements }){
    return (
        <Fragment>
            {
                diapos.map(item => (
                    <Slide key={Math.random()} left>
                    
                    <div  style={{border:"1px solid #000", height:"550px", 
                    width:"90%",margin:10, overflow:"hidden"}}>
                      <Slide right>
                       <h2 style={{border:"1px solid #000", margin:5, padding:5}}>
                           Diapo {item}
                        </h2>
                        <div>
                            {
                              diapoElements.map(element =>{
                                  if(element.numD == item)
                                    return <Element key={Math.random()} element={element}
                                                   diapoElements={diapoElements}  />
                                  else return "";
                              })
                            }
                        </div>
                       
                       </Slide>
                       </div>
                       </Slide>
                ))
            }
        </Fragment>
    )
   
}

export default ShowDiapos;