import Image from 'next/image';
import HeaderStyles from './Header.module.scss';
import Logo from './Header_Logo_cofcof.svg';

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <Image
                src={Logo}
                draggable='false'
            />
        </header>
    )
}