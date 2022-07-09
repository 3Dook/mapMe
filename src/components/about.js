import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose} from 'react-icons/ai';
import './about.css'



const About = () => {


    return (
        <div className="aboutContainer">
            <div className="close">
                <IconContext.Provider value={{ color: "black", size: "2em" }}>
                        <Link to={'/'}>
                            <AiOutlineClose />
                        </Link>
                </IconContext.Provider>
            </div>
            <h1>
                about
            </h1>
            <div>
                <p>
                    This is a project that is design to load up addresses from and mark and span them into a google map api.    
                </p>
                <p>
                    click the map button on the home page to search
                </p>
                <p>
                    Location to load up more addresses
                </p>
            </div>
        </div>

    )
}

export default About;