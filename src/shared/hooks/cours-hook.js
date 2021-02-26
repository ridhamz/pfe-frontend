import  { useState, useCallback, useEffect } from "react";
import Text from "../../Elements/components/Text";
//let logoutTimer;
export const useCours = () => {

   

   const [diapos, setDiapos] = useState([]);
   const [show, setShow] = useState(false);
   const [numD, setNumD] = useState(0);
   let  [diapoElements, setDiapoElements] = useState([]);
    const [currentDiapo, setCurrentDiapo] = useState(0)

    const onAddDiapo = () => {
    
       if(numD != diapos.length ) 
        setNumD(diapos.length)
        setNumD(numD +1 )
        setCurrentDiapo(currentDiapo + 1 )
        setDiapos([...diapos,numD + 1]);
        setDiapoElements([...diapoElements])

        window.scrollTo(0,100 * 580)
        console.log(diapoElements)
    };

    const showCours = () =>{
      setShow(c=> !c)
  }


    const prevDiapo = () => {
        if(numD == 1 || numD == 0) return
        const prevD = diapos.find(d => d.num == (numD - 1));
        setNumD(c => c -1)
        console.log(diapos)
        setCurrentDiapo(prevD)
    };


    const nextDiapo = () => {
        if(numD== (diapos.length) || diapos.length == 1 || diapos.length == 0) return
       const nextD = diapos.find(d => d.num == (numD + 1));
       setNumD(c => c + 1)
    //  console.log(nextD)
      if(nextD) setCurrentDiapo(nextD)

      console.log(diapos)
      
    };


    const specDiapo = num => {
      
      const D = diapos.find(d => d == (num));
      //if(!show) {
        setCurrentDiapo(D)
        setNumD(D)
        setDiapoElements([...diapoElements])
        //return ;
      //}
      window.scroll(0,(num -1) * 570)
      //alert(numD)
      
    
    }

    const addElement = elementType =>{
      const el = {
        id:Math.random(),
        numD: numD,
        type: elementType,
        value: ""
      }
      setDiapoElements([...diapoElements, el])
      //alert(JSON.stringify(diapoElements))
     // alert(JSON.stringify(diapoElements.length))
     
    }

    const onChangeElement = (element, value, diapoElements) => {
      
     const el = diapoElements.find(e => e.id == element.id)
     if(element.type == "image"){
      let pickedFile;
    
          pickedFile = value.target.files[0];
          el.file = pickedFile;
           return ;
          
     }
     if(element.type == "video"){
      let pickedFile;
    
          pickedFile = value.target.files[0];
          el.file = pickedFile;
           return ;
          
     }
     el.value= value;
     //setDiapoElements([...diapoElements])
    }

    



    return {
            diapos, currentDiapo, 
            numD, onAddDiapo, prevDiapo, 
            nextDiapo, diapoElements,
            addElement,onChangeElement,
            specDiapo,showCours, show
            };
}