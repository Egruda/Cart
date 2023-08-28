import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import styles from "./Shopcart.module.css";

function Shopcart({items, cart, setItems}) {
    return (
        <div className={styles.shopcart}>
           <Shop className={styles.shop} items={items} setItems={setItems}/>
           <Cart className={styles.cart} cart={cart} /> 
        </div>
    )
}

export default Shopcart;