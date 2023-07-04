import styles from './Header.module.css'
import Logo from '../assets/logo.svg';

export function Header(){
return (
    <header className={styles.header}>
        <strong>Post page</strong>
        {/* <img src={Logo} alt="" /> */}
    </header>
    );
}