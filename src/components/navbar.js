import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const sidebarData = [
    {
        title: 'HOME',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'Add Location',
        path: '/location',
        cName: 'nav-text'
    },
    {
        title: 'ABOUT',
        path: '/about'
    }
]


export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <nav className='nav-container'>
            <ul className="navMenuItems">
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </nav>


    </>
    )
}