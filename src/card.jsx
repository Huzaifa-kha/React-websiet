import React from "react";
import First from './imgs/first.jpg';
import second from './imgs/second.jpg';
import third from './imgs/third.jpg';
import fourth from './imgs/fourth.jpg';
import fifth from './imgs/fifth.jpg';
import sixth from './imgs/sixth.jpg';
import { NavLink } from "react-router-dom";




const Card = () => {
    return (
        <>



            <div className="row gy-5">
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                        <img src={First} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title " style={{ fontWeight: "bold" }}>Web Development</h5>
                            <p className="card-text">Web development is the building and maintenance of websites; .</p>
                            < NavLink to="" className="btn btn-primary">Go With CodeJobes</NavLink>
                        </div>
                    </div>


                </div>

                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                        <img src={third} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title " style={{ fontWeight: "bold" }}>App Development</h5>
                            <p className="card-text">App Development refers to the creation of computer applications for use on mobile devices.</p>
                            < NavLink to="" className="btn btn-success">Make It With CodeJobes</NavLink>
                        </div>
                    </div>


                </div>

                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                        <img src={second} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: "bold" }}> Cyber Security</h5>
                            <p className="card-text">Cyber security refers to the body of technologies, processes, and practices designed .</p>
                            < NavLink to="" className="btn btn-info">Applay With CodeJobes</NavLink>
                        </div>
                    </div>


                </div>
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                        <img src={fourth} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: "bold" }}>Digital Marketing</h5>
                            <p className="card-text">Digital marketing is the use of the Internet to reach consumers. Digital marketing is a broad field.</p>
                            < NavLink to="" className="btn btn-danger">Markiting For CodeJobs</NavLink>
                        </div>
                    </div>


                </div>
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                        <img src={fifth} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: "bold" }}>Softwer Development</h5>
                            <p className="card-text">Software development is the process of conceiving, specifying, designing, programming, documenting, testing.</p>
                            < NavLink to="" className="btn btn-warning">Applay Now</NavLink>
                        </div>
                    </div>


                </div>
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card" >
                        <img src={sixth} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontWeight: "bold" }}>Markiting</h5>
                            <p className="card-text">the action or business of promoting and selling products or services, including market research and advertising.</p>
                            < NavLink to="" className="btn btn-secondary">MArkiting With CodeJobes</NavLink>
                        </div>
                    </div>


                </div>


            </div>






        </>

    );
};



export default Card;