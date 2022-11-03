import Image from 'next/image';
import HeaderStyles from './Header.module.css';
import Logo from './Header_Logo_cofcof.svg';

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <div>
                <Image
                    src={Logo}
                    fill
                    draggable='false'
                />
            </div>
        </header>
    )
}