import React from "react";

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

    export default Header