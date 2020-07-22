import React from "react";
import ReactDOM from "react-dom";
import Greeting from "components/Greeting";
import 'css/index.css';
import Product from "components/product";
// import test from 'img/300-test.png';

const Header = () =>{
    return (
        <nav class="nav-container">
            <ul class="logo">
                <li><img src="/img/Amazon_logo.svg" alt="amazon_logo"/></li>
            </ul>
            <ul class="navigation-container">
                <li class="menu-link"><a href="/">Home</a></li>
                <li class="menu-link"><a href="product-listing">Products</a></li>
                <li class="menu-link"><a href="registration">Registration</a></li>
                <li class="menu-link"><a href="sign-in">Login</a></li>
            </ul>
        </nav>

    )}





const App = () => {

    //Fetch product listing
    const productData = [

        {
            // imgPath:'smartwatch-large.jpg',
            Id:1,
            Title:"Fitbit Versa 2",
            Description:"Fitbit Versa 2 Health And Fitness Smartwatch",
            Price:`$263`,
            
        },
     {
            // imgPath:'airpods.jpg',
            Id:2,
            Title:"Apple AirPods",
            Description:"Apple MMEF2AM/A AirPods Wireless Bluetooth Headset for iPhone",
            Price:`$250`,
            
        },
        {
            // imgPath:'home-camera.jpg',
            Id:3,
            Title:"YI 1080p Home Camera",
            Description:"Indoor Wireless IP Security Surveillance System with Night Vision",
            Price:`$35`,
            
        },
        {
            // imgPath:'drone.jpg',
            Id:4,
            Title:"DJI Mavic Mini",
            Description:"2.7K Camera, Controller, 3-Axis Gimbal, GPS, 30 Minutes Flight Time",
            Price:`$499`,
            
        },
        {
            // imgPath:'canon-camera.jpg',
            Id:5,
            Title:"Canon EOS M50",
            Description:"Mirrorless Camera Kit with 15-45mm lens(Black)",
            Price:`$729`,
            
        }
    
        ]
    const productArray = productData.map(details => <Product key={details.Id} title={details.Title} description={details.Description} price={details.Price}/>)

	return (
        <>
    <Greeting name="Products" />
    <Header />
    <Footer/>    
    
    </>
    )
}
const Footer = () =>{
    return (
    <footer class="footer-container">
    <ul class="footer-navigation">
        <li class="menu-link"><a href="/">Home</a></li>
        <li class="menu-link"><a href="">Shipping and returns</a></li>
        <li class="menu-link"><a href="">Affiliates</a></li>
        <li class="menu-link"><a href="">Careers</a></li> 
        <li class="menu-link"><a href="">Help and Support</a></li> 
    </ul>
    </footer>)
}

ReactDOM.render(<App />, document.getElementById('root'));