import React from "react";

function About (){
    return(
        <div className="aboutContainer">
            <div className="project">
                <h1>LoL Cards</h1>
                <h4>Created by Bill Munkacsy, Brandon Lowe, Primo Gill, and Levar Bobb-Semple </h4>
                <p>LoL cards is our first full ecommerce website created as a porfolio piece as part of our course curriculum for Fullstack Academy. 
                LoL Cards was created using React.js, Redux toolkit, Node.js, Express, Sequelize, and Stripe Checkout.
                </p>
            </div>
            <div className="devContainer">
                <h4>Bill Munkacsy</h4>
                <img className='photo' src='https://res.cloudinary.com/dn79dsttu/image/upload/v1665677209/BillProfile_txamxp.jpg'/>
                <p>Prior to enrolling in Fullstack Academy Bill was a mathematics teacher at public schools. Bill is excited to join the development community and is looking for remote work or work in the central Virginia Area.</p>
                <a href='www.linkedin.com/in/williammunkacsy'>Bill's LinkedIn</a>
                <div>
                <a href='https://github.com/BillMun'>Bill's GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default About
