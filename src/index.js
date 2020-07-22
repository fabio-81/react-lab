import React from "react";
import ReactDOM from "react-dom";
import Greeting from "components/Greeting";
import 'css/index.css';
// import test from 'img/300-test.png';

const Header = () =>{
    return <header>Header!</header>
}

const Footer = () =>{
    return <footer>Footer!</footer>
}

const App = () => {

    //Fetch product listing
    const productArray = [

    {
        imgPath:'smartwatch-large.jpg',
        Title:"Fitbit Versa 2",
        Description:"Fitbit Versa 2 Health And Fitness Smartwatch",
        Category:"Electronics",
        Price:`$263`,
        featured:true,
    },
 {
        imgPath:'airpods.jpg',
        Title:"Apple AirPods",
        Description:"Apple MMEF2AM/A AirPods Wireless Bluetooth Headset for iPhone",
        Category:"Electronics",
        Price:`$250`,
        featured:true,
    },
    {
        imgPath:'home-camera.jpg',
        Title:"YI 1080p Home Camera",
        Description:"Indoor Wireless IP Security Surveillance System with Night Vision",
        Category:"Electronics",
        Price:`$35`,
        featured:true,
    },
    {
        imgPath:'drone.jpg',
        Title:"DJI Mavic Mini",
        Description:"2.7K Camera, Controller, 3-Axis Gimbal, GPS, 30 Minutes Flight Time",
        Category:"Electronics",
        Price:`$499`,
        featured:true,
    },
    {
        imgPath:'canon-camera.jpg',
        Title:"Canon EOS M50",
        Description:"Mirrorless Camera Kit with 15-45mm lens(Black)",
        Category:"Electronics",
        Price:`$729`,
        featured:false,
    }

    ]


	return (
        <>
    <Greeting name="World" />
    <Header />
    
    
    </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));