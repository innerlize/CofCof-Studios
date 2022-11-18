import React, { useState } from 'react';
import Image from 'next/image';
import NavbarStyles from './Navbar.module.scss';


export default function Navbar() {

    const [isActivated, setIsActivated] = useState(false);

    return (
        <nav id='navbar' className={NavbarStyles.navbar}>
            <a href='#' className={NavbarStyles.navbar_logo}>
                <Image src='/Logo_cofcof.svg' fill />
            </a>
            
            <div onClick={(e) => setIsActivated(!isActivated)} id='hamburguer' className={NavbarStyles.hamburguer_container}>
                <div className={isActivated ? [NavbarStyles.hamburguer, NavbarStyles.activated_hamburguer].join(" ") : NavbarStyles.hamburguer}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
                
            <div className={isActivated ? [NavbarStyles.nav_links_container, NavbarStyles.activated].join(" ") : NavbarStyles.nav_links_container}>
                <a onClick={(e) => setIsActivated(!isActivated)} href='#services'>Services</a>
                <a onClick={(e) => setIsActivated(!isActivated)} href='#works'>Portfolio</a>
                <a onClick={(e) => setIsActivated(!isActivated)} href='#contact'>Contact</a>
            </div>
        </nav>
    )
}