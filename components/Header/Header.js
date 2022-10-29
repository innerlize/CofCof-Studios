import Image from 'next/image';
import HeaderStyles from './Header.module.css';

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <Image src='/Header_Logo_cofcof.svg' width={272} height={204} draggable='false' />
        </header>
    )
}