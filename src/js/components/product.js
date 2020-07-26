import React from "react";
// import Image from "img/airpods.jpg"
const Product =(prop)=>{

    return(
     
<>
    
    <div>
        <div class="image-container">{prop.image}</div>
        {/* <img src={Image} alt="Just a test image" /> */}
        <p><b>Title:</b> {prop.title}</p>
        <p><b>Description:</b> {prop.description}</p>
        <p><b>Price:</b> {prop.price}</p>
        <button onClick={ event =>{alert('Added to Cart!')}}>BUY NOW!</button>
    </div>
    
</>

    )
    
}

export default Product;