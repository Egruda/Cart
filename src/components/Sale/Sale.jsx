import styles from './Sale.module.css';

function Sale() {
    return (
        <div className={styles.sale}>
            <p className={styles.p}>Get 20% discount with code: FRISALE20!</p>
        </div>
    )
}

export default Sale;