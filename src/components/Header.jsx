import styles from './Header.module.css';
console.log(styles)
import igniteLogo from '../assets/Ignite-logo.svg.svg';


export function Header(){
    return(
        <header className={styles.header}>
         <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}