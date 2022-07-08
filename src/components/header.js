import React, {useEffect, useState } from "react";
import { BsGem } from 'react-icons/bs';
import './header.css';


const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <div className="icon">
                    <BsGem size="50"/>
                </div>
            </div>
            <div className="content">
                <div className="Middle Space">
                        |
                </div>
                <div className="mapSpace">
                    <h1>
                       Google Maps 
                    </h1>
                </div>
            </div>
            <div>
                NavBar
                
            </div>
        </div>

    )
}

export default Header;