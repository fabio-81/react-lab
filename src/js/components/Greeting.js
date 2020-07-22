import React from "react";
import test from 'img/300-test.png';

const Greeting = ({name}) => {
	return (
    <>
    <h1>Hello, {name}!</h1>
    <img src={test} alt="test image" />
    </>
    )}

export default Greeting;