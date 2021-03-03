import React from 'react';
import Cercle from './components/Cercle';
import Image from './components/Image';
import OrderList from './components/OrderList';
import Square from './components/Square';
import Text from './components/Text';
import Rectangle from './components/Rectangle';
import UnorderList from './components/UnorderList';
import Video from './components/Video';

function Element({ element, diapoElements }){
    switch(element.type){
        case "text":
             return <Text element={element} diapoElements={diapoElements} />
        case "image" : 
              return <Image center element={element} diapoElements={diapoElements} />
        case "video" :
              return <Video center element={element} diapoElements={diapoElements}/>
        
        case "square" :
              return <Square center element={element} diapoElements={diapoElements}/>
        
        case "cercle" :
             return <Cercle center element={element} diapoElements={diapoElements}/>
        
        case "rectangle" :
                  return <Rectangle center element={element} diapoElements={diapoElements}/>
      
         case "orderlist" :
                  return <OrderList center element={element} diapoElements={diapoElements}/>

         case "unorderlist" :
                        return <UnorderList center element={element} diapoElements={diapoElements}/>
        default: return ""
    }
}

export default Element;