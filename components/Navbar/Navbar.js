import Image from 'next/image';
import NavbarStyles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={NavbarStyles.navbar}>
            <Image src='/Logo_cofcof.svg' width={55} height={32} />
            
            <div className={NavbarStyles.hamburguer}>
                xD
            </div>
        </nav>
    )
}