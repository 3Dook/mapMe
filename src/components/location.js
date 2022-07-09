import React, {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import {AiOutlineClose} from 'react-icons/ai';
import './location.css'



const Location = () => {

    const [addresses, setAddresses] = useState(["2141 oakland rd", "2"])
    const [color, setColor] = useState(["red", "orange", "yellow"])
    return (
        <div className="locationContainer">
            <div className="close">
                <IconContext.Provider value={{ color: "black", size: "2em" }}>
                        <Link to={'/'}>
                            <AiOutlineClose />
                        </Link>
                </IconContext.Provider>
            </div>
            <h1>
                location
            </h1>
            {
                addresses.map((address, key)=>{
                    return (
                        <div key={key} className="locationRow">
                            <div>X</div>
                            <div>[ ]</div>
                            <div>{address}</div>
                        </div>
                    )
                })
            }
            <div>Add</div>
        </div>

    )
}

export default Location;