import React, { useState } from "react";

const Tour=({id,name,info,image,price,removeTour})=>{
    const [readMore,setREadMore]=useState(false)
    const [remove,setRemove]=useState(id);
    // const removeTour=(e)=>{
    //     setRemove(remove)
    // }
    return <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>
                {readMore ? info : `${info.substring(0,100)}...`}
            <button onClick={()=>setREadMore(!readMore)}>&nbsp;{readMore? "read less":"read more"}</button>
            </p>
            <button className="delete-btn" onClick={()=>removeTour(id)}>not interested</button>
        </footer>
        </article>
    
}
export default Tour;