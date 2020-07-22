import React from "react";
import logo from 'img/Amazon_logo.svg'

const Header = () =>{
    return (
        <nav class="nav-container">
            <ul class="logo">
                <li><img src={logo} alt="amazon_logo"/></li>
            </ul>
            <ul class="navigation-container">
                <li class="menu-link"><a href="/">Home</a></li>
                <li class="menu-link"><a href="product-listing">Products</a></li>
                <li class="menu-link"><a href="registration">Registration</a></li>
                <li class="menu-link"><a href="sign-in">Login</a></li>
            </ul>
        </nav>

    )}

    export default Header