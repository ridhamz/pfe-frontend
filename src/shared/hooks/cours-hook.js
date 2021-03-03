import  { useState, useCallback, useEffect } from "react";
import Text from "../../Elements/components/Text";
//let logoutTimer;
export const useCours = () => {

   

   const [diapos, setDiapos] = useState([]);
   const [show, setShow] = useState(false);
   const [numD, setNumD] = useState(0);
   let  [diapoElements, setDiapoElements] = useState([]);
    const [currentDiapo, setCurrentDiapo] = useState(0)
    const [activeElement, setActiveElement] = useState(null)

    const onAddDiapo = () => {
    
        setNumD(diapos.length + 1)
        setCurrentDiapo(currentDiapo + 1 )
        setDiapos([...diapos,diapos.length + 1]);
        setDiapoElements([...diapoElements])
        setActiveElement(null)
     
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
        setActiveElement(null)
    }

    const addElement = elementType =>{
      const el = {
        id:Math.random(),
        numD: numD,
        type: elementType,
        value: "",
        values: [],
        position : {
          x:10,
          y:10
        },
        width: "",
        height: "",
        style: {
          color: "black",
          fontSize: "15px",
          textAlign: "left"

        },
      }
      setDiapoElements([...diapoElements, el])
      setActiveElement(null)
      changeActiveElement(el)
      //alert(JSON.stringify(diapoElements))
     // alert(JSON.stringify(diapoElements.length))
     
    }

    const onChangeElement = (element, value, diapoElements, y=false) => {
      
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

     if(element.type == "orderlist" || element.type == "unorderlist"){
      el.values.push(value)
      setActiveElement({...el})
      return ; 
     }
     el.value= value;
     //setDiapoElements([...diapoElements])
    }

    const onChangePosition = (el_id, position, diapoElements )=> {
      const el = diapoElements.find(e => e.id == el_id)
      el.position = {...position}
    }

    const onChangeWidth = (el_id, width, diapoElements )=> {
      const el = diapoElements.find(e => e.id == el_id)
      el.width = width
    }

    const onChangeHeight = (el_id, height, diapoElements )=> {
      const el = diapoElements.find(e => e.id == el_id)
      el.height = height
    }

    const onChangeStyle = (el_id, target, diapoElements )=> {
      const el = diapoElements.find(e => e.id == el_id)
      if(el.type == "image"){
        let pickedFile;
    
          pickedFile = target.files[0];
          el.file = pickedFile;
          setActiveElement({...el})
           return ;
      }

      if(el.type == "video"){
        let pickedFile;
    
          pickedFile = target.files[0];
          el.file = pickedFile;
          setActiveElement({...el})
           return ;
      }

      el.style[target.name]=target.value
      setActiveElement({...el})
     // alert(fontSize)
      //alert( JSON.stringify(el.style) )
    }

    const getActiveEement = element_id => {
      const el = diapoElements.find(e => e.id == element_id)
      return el; 
    }

    const changeActiveElement = useCallback(element => {
      setActiveElement({...element})
    },[])


    const onDeleteElement = useCallback((element_id, diapoElements) => {
      
      const el = diapoElements.filter(e => e.id !== element_id)
      if(el == undefined) {
        setDiapoElements([])
        setActiveElement(null)
        return;
      }
      setDiapoElements([...el])
      setActiveElement(null)
    },[])

    



    return {
            diapos, currentDiapo, 
            numD, onAddDiapo, prevDiapo, 
            nextDiapo, diapoElements,
            addElement,onChangeElement,
            specDiapo,showCours, show,
            onChangePosition, onChangeWidth,
            onChangeHeight, activeElement,
            getActiveEement, changeActiveElement,
            onChangeStyle,onDeleteElement
            };
}