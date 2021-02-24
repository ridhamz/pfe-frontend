import { Fragment } from 'react';
import Slide from 'react-reveal/Slide';
import ShowDiapos from '../diapo/ShowDiapos';
import { useCours } from '../shared/hooks/cours-hook';

function ShowCours(){
    const {diapos} = useCours()

    return <Fragment>
        {diapos.length}
    {
        diapos.map(item => (
            <Slide left>
            <div  style={{border:"1px solid #000", height:"400px", 
                              width: "600px",margin:50}}>
              
              <Slide right>
               <h1>Diapo {item.numD}</h1>
               </Slide>
               </div>
               </Slide>
        ))
    }
</Fragment>

    return <ShowDiapos diapos={diapos} />
}

export default ShowCours;