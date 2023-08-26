import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';

function Navbar() {
    return(
        <nav className={styles.nav}>
            <img src={logo} className={styles.logo} alt="Men's Outlet logo" />
            <div>
                <ul className={styles.ul}>
                    <li><a className={styles.list} href="/home">Home</a></li>
                    <li><a className={styles.list} href="/shop">Shop</a></li>
                </ul>
            </div>
            <a className={styles.icon} href=""><Icon path={mdiCartOutline} color='whitesmoke' size={3} /></a>
        </nav>
    )
}

export default Navbar;