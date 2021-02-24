import  { useState, useCallback, useEffect } from "react";
//let logoutTimer;
export const useCours = () => {

   

   const [diapos, setDiapos] = useState([]);
   const [numD, setNumD] = useState(0);
   const [show, setShow] = useState(0);
    const [currentDiapo, setCurrentDiapo] = useState({
      num:0,
      title:"",
      body:"",
      image:"",
      video:""
    });

    const onAddDiapo = () => {
        setNumD(c => c +1 )
        setCurrentDiapo(c => ({...c, num: c.num + 1}))
        setDiapos([...diapos, {numD: numD + 1, ...currentDiapo}]);
    };


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


    



    return {diapos, currentDiapo, numD, onAddDiapo, prevDiapo, nextDiapo};
}