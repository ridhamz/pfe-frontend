import React, { useContext, useEffect, useState } from 'react';
import { useCours } from '../shared/hooks/cours-hook';
import { CoursContext } from '../shared/context/cours-context';
import Text from './components/text';
import Image from './components/image';
import Video from './components/video';
import Square from './components/square';
import Cercle from './components/cercle';
import Triangle from './components/triangle';
import OrderList from './components/orderList';
import Rectangle from './components/rectangle';

function GetActiveEement(){
  const cours = useContext(CoursContext);
    const {  activeElement } = cours;
    if(!activeElement) return "";
    if (activeElement.type=="text") {
      return <Text activeElement={activeElement} />
    }

    if (activeElement.type=="image") {
      return <Image element={activeElement} />
    }

    if (activeElement.type=="video") {
      return <Video element={activeElement} />
    }
    if (activeElement.type=="square") {
      return <Square activeElement={activeElement} />
    }

    if (activeElement.type=="cercle") {
      return <Cercle activeElement={activeElement} />
    }

    if (activeElement.type=="rectangle") {
      return <Rectangle activeElement={activeElement} />
    }

    if (activeElement.type=="orderlist") {
      return <OrderList activeElement={activeElement} />
    }

    if (activeElement.type=="unorderlist") {
      return <OrderList activeElement={activeElement} />
    }
}

export default  GetActiveEement;