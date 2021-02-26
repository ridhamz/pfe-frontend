import React from 'react';

function Outils({ addElement }){
    return <div  className="row" style={{position: "relative", margin:"auto", zIndex:15}}>
       <div className="col" style={{marginLeft:5,marginRight:5,  border:"1px solid #001", 
       padding:10,position:"fixed",width:"100%", backgroundColor:"blue"}}>
           <button className="btn btn-danger" onClick={()=>addElement("text")}>Add Text</button>
           
           <button className="btn btn-danger" style={{marginLeft:10}}
           onClick={()=>addElement("image")}>Add Image</button>

   <button className="btn btn-danger" style={{marginLeft:10}}
           onClick={()=>addElement("video")}>Add Video</button>
       </div>
    </div>
}
export default Outils;