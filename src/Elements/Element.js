import React from 'react';
import Image from './components/Image';
import Text from './components/Text';
import Video from './components/Video';

function Element({ element, diapoElements }){
    switch(element.type){
        case "text":
             return <Text element={element} diapoElements={diapoElements} />
        case "image" : 
              return <Image center element={element} diapoElements={diapoElements} />
        case "video" :
              return <Video center element={element} diapoElements={diapoElements}/>
        default: return <Text/>
    }
}

export default Element;