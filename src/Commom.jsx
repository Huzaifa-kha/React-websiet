import React from "react";
import { NavLink } from "react-router-dom";
import MANIMG from '../src/man.gif'











const Commom = (props) => {
    return (
        <>
            <section id="header" style={{ marginTop: "200px" }}>
                <div className="container-fluid ">
                    <div clasName="row">
                        <div className="col-10 mx-auto">
                            <div className="row"  >
                                <div className="col-md-6 mt-5 pt-lg-0 order-2 order-lg-1" >
                                    <h1 style={{ marginTop: "100px" }}>
                                        {props.name}<br /><strong className="strong"> CodeJobes</strong>
                                    </h1>
                                    <h2 className="my-3 ">
                                        Go With The Great Teams Of Web Development
                                </h2>
                                    <div className="my-3">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img"  >
                                    <img src={props.imgsrc} className="img-fluid animated" alt="homeimg" />


                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>





















        </>
    );
};



export default Commom;