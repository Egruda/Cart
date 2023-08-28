import styles from './Cart.module.css'

function Cart({cart}) {
    return (
        <div className={styles.cart}>
            <h2>Shopping Cart</h2>
            <div>
            {cart ? cart.map(item=>
                <div className={styles.list} key={item.id}>
                <p>{item.quantity} X</p>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.price}>$ {item.price.toFixed(2)}</p>
                </div>) :
                null
            }
            </div>
            <div className={styles.total}>
                <p>Total</p>
                <p>$ {cart? cart.reduce(function (acc, obj) { return acc + obj.price*obj.quantity }, 0).toFixed(2): 0}</p>
            </div>
            <div className={styles.buttonDiv}>
                <button className={styles.checkout} type='button'>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Cart;