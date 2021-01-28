import React, { useState } from "react";



const Contact = () => {

    const [data, setData] = useState({

        fullname: " ",

        phone: " ",

        email: " ",


        msg: ""



    });
    const InputEvent = (event) => {
        const { name, value } = event.target;


        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,

            }
        })

    };

    const formSubmit = (e) => {

        e.preventDefult();
        alert(`My name is ${data.fullname}. My mobile no is ${data.phone} My email Account is${data.email}.My message is ${data.msg}.  `)
    };



    return (
        <>

            <div className="my-5">
                <h1 className="text-center">CONTACT US</h1>
            </div>
            <div className="container contact_div">
                <div className="row"><div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">NAME</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                name="fullname"
                                value={data.fullname}
                                onchange={InputEvent}
                                placeholder=" Enter  Your Name" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1"
                                name="phone"
                                value={data.phone}
                                onchange={InputEvent}
                                placeholder="Mobile Number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                name="email"
                                value={data.email}
                                onchange={InputEvent}
                                placeholder="name@example.com" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message About Us</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                name="msg"
                                value={data.msg}
                                onchange={InputEvent}
                            ></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary " type="submit">Submit form</button>
                        </div>



                    </form>
                </div>

                </div>
            </div>

        </>


    );
};



export default Contact;