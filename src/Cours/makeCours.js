import { repeat } from "lodash";
import React, { Fragment, Suspense, useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Diapo from "../diapo/Diapo";
import ShowDiapos from "../diapo/ShowDiapos";
import { useCours } from "../shared/hooks/cours-hook";
import Slide from 'react-reveal/Slide';
import Outils from "../outils/Outils";
import { CoursContext } from "../shared/context/cours-context";



function MakeCours() {
   
  const cours = useContext(CoursContext);
   
  const {
      onAddDiapo,
      prevDiapo,
      nextDiapo,
      numD,
      diapos,
      diapoElements,
      addElement,
      specDiapo,
      showCours,
      show,
      currentDiapo
  } = cours;
   


  return (
  <Fragment>
    <Outils addElement={addElement} />
    <section className="row" style={{marginTop:"90px"}} >

      <div className="col-md-2" >
        <div style={{position: "absolute", left: "0"}}>
         <div style={{position:"fixed", width:"50px"}}>

        <button className="btn btn-success" style={{margin:20}}
           onClick={onAddDiapo}
          >Add Diapo</button>
        {
         diapos.map(item => (
            <button className="btn btn-primary" style={{margin:20}}
           onClick={()=> specDiapo(item)}
          >Diapo {item }</button>
          ))
        }
        </div>
        </div>
      </div>

      <div className="col-md-10">
        { numD > 0 && false? <Diapo diapo={numD} diapoElements={diapoElements}  /> :""}
        {true && <ShowDiapos  diapos={diapos} diapoElements={diapoElements} />}
      </div>

     
    </section>
   
      
    </Fragment>
  );

  
}

export default MakeCours;
