import Image from 'next/image';
import NavbarStyles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={NavbarStyles.navbar}>
            <a href='#'>
                <Image src='/Logo_cofcof.svg' fill />
            </a>
            
            <div className={NavbarStyles.hamburguer}>
                xD
            </div>
        </nav>
    )
}