import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';
import logo from '../../assets/logo.png';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

function Navbar({cart}) {
    return(
        <nav className={styles.nav}>
            <img src={logo} className={styles.logo} alt="Men's Outlet logo" />
            <div>
                <ul className={styles.ul}>
                    <Link to="/" className={styles.list}>Home</Link>
                    <Link to="/shopcart" className={styles.list}>Shop</Link>
                </ul>
            </div>
            <Link to="/shopcart" className={styles.icon}><Icon path={mdiCartOutline} color='whitesmoke' size={2} /><p>{cart? cart.reduce((acc,object)=>acc+object.quantity,0) : 0}</p></Link>
        </nav>
    )
}

export default Navbar;