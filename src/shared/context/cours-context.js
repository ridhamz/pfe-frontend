import { createContext } from 'react';

export const CoursContext = createContext({
    numD: 0,
    diapos: [],
    diapoElements: [],
    show: false,
    currentDiapo: {},
    activeElement: {},
    activeElement:{},
    changeActiveElement: () => {},
    onChangeStyle: () => {},
    onAddDiapo: () => { },
    prevDiapo: () => { },
    nextDiapo: () => { },
    addElement: () => { },
    specDiapo: () => { },
    showCours: () => { },
    onChangePosition: ()=>{},
    onChangeElement: ()=>{},
    onChangeWidth: ()=>{},
    onChangeHeight: ()=>{},
    onDeleteElement: () =>{},
})