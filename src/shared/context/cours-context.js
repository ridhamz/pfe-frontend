import { createContext } from 'react';

export const CoursContext = createContext({
    numD: 0,
    diapos: [],
    diapoElements: [],
    show: false,
    currentDiapo: {},
    onAddDiapo: () => { },
    prevDiapo: () => { },
    nextDiapo: () => { },
    addElement: () => { },
    specDiapo: () => { },
    showCours: () => { },
})