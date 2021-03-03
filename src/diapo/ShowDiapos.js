import React, { Fragment, useContext } from 'react';
import Slide from 'react-reveal/Slide';
import Element from '../Elements/Element';
import { CoursContext } from '../shared/context/cours-context';


function ShowDiapos({ setActiveElement }){
    const cours = useContext(CoursContext);
   
  const {
      
      numD,
      diapoElements,
      
  } = cours;
    return (
      
                    
                   
                    
                    <div  style={{border:"1px solid #000", height:"510px", 
                    width:"90%",margin:2, overflow:"hidden"}}>
                      <Slide>
                       <h2 style={{border:"1px solid #000", margin:3, padding:3}}>
                           Diapo {numD}
                        </h2>
                        <div>
                            {
                              diapoElements.map(element =>{
                                  if(element.numD == numD)
                                    return <Element key={Math.random()} element={element}
                                                     setActiveElement={setActiveElement}
                                                     diapoElements={diapoElements}  />
                                  else return "";
                              })
                            }
                        </div>
                       
                       </Slide>
                       </div>
                     
    )
   
}

export default ShowDiapos;