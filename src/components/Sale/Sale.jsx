import styles from './Sale.module.css';

function Sale() {
    return (
        <div className={styles.sale}>
            <p className={styles.p}>Get 20% discount with code: <span className={styles.span}>FRISALE20!</span></p>
        </div>
    )
}

export default Sale;