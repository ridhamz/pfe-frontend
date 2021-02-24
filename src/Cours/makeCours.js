import { repeat } from "lodash";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Diapo from "../diapo/Diapo";
import ShowDiapos from "../diapo/ShowDiapos";
import { useCours } from "../shared/hooks/cours-hook";
import Slide from 'react-reveal/Slide';



function MakeCours() {
    const [show, setShow] = useState(0);
    let ALlDiapos = [];
   
  const {
      onAddDiapo,
      prevDiapo,
      nextDiapo,
      numD,
      diapos,
      currentDiapo
  } = useCours();

  const history = useHistory();
 
   useEffect(()=>{
    window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        bottom:50,
        behavior: 'smooth',})
   },[])

    const specDiapo = numD => {
      const D = diapos.find(d => d.numD == (numD));
      console.log(D)
     // setCurrentDiapo({...D});

     window.scroll(0,(numD -1) * 630)
    
    }

    const showCours = () =>{
        setShow(c=> !c)
    }

  return (
  <Fragment>
    <section className="row">

      <div className="col-md-2" >
        
          <div style={{border:"1px solid red"}}>
            All Diapos : {diapos.length}
          </div>
       
        <hr/>
        <div style={{position: "absolute", left: "0"}}>
         <div style={{position:"fixed", width:"50px"}}>

        <button className="btn btn-success" style={{margin:20}}
           onClick={onAddDiapo}
          >Add Diapo</button>
        {
          diapos.length && diapos.map(item => (
            <button className="btn btn-primary" style={{margin:20}}
           onClick={()=> specDiapo(item.numD)}
          >Diapo {item.numD}</button>
          ))
        }
        </div>
        </div>
      </div>

      <div className="col-md-8">
        { numD > 0 && !show ? <Diapo diapo={numD} /> :""}
        {show && <ShowDiapos diapos={diapos} />}
      </div>

      <div className="col-md-2" style={{position: "absolute", left: "1000px"}}>
        <center style={{position:"fixed"}}>
        {diapos.length> 1 && <button className="btn btn-primary" style={{margin:10}}
           onClick={prevDiapo}
          >Prev Diapo</button>}
          
       { diapos.length >1 && <button className="btn btn-primary"
           onClick={nextDiapo}
          >Next Diapo</button>}


       { diapos.length>0 &&<button className="btn btn-primary" style={{margin:20}}
           onClick={showCours} //history.push("showcours")}
          >{!show ? "Play" : "Hide"}</button>
          }
         </center>
       </div>
    </section>
   
      
    </Fragment>
  );

  
}

export default MakeCours;
