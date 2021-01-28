import React from "react";
import { NavLink } from "react-router-dom";
import MANIMG from '../src/her.png'
import Commom from "./Commom";













const About = () => {
    return (
        <>
            <Commom name="Well Come TO About" imgsrc={MANIMG} visit="/contact" btname="Contact Us" />

        </>
    );
};



export default About;