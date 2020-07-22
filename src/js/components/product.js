import React from "react";

const Product =(prop)=>{

    return(
     
<>
    
    <div>
        {/* <p>{prop.imgPath}</p> */}
        <p><b>Title:</b> {prop.title}</p>
        <p><b>Description:</b> {prop.description}</p>
        <p><b>Price:</b> {prop.price}</p>
    </div>
    
</>

    )
    
}

export default Product;