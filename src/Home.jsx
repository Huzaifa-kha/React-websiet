import React from "react";
import { NavLink } from "react-router-dom";
import MANIMG from '../src/man.gif'
import Commom from "./Commom";











const Home = () => {
    return (
        <>
            <Commom name="Get Start Your Job With" imgsrc={MANIMG} visit="/service" btname="Get Start" />

        </>
    );
};



export default Home;