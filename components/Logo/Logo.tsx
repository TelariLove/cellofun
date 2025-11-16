import Image from 'next/image';
import style from './Logo.module.css';

export default function Logo() {
	return <Image src="/logo.svg" alt="Zwrot Opakowania" width={256} height={256} className={style.logo}/>;
}