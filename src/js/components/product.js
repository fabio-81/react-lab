import React from "react";

const Product =(prop)=>{

    return(
<>
    <div>
        <p>{prop.title}</p>
        <p>{prop.description}</p>
        <p>{prop.price}</p>
    </div>

</>
    )
}

export default Product;