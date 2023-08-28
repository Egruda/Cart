import styles from './Shop.module.css';

function Shop({items, setItems, loading, error}) {
  
    function decrease(e) {
        const newItems = items.map(item=>{
            if(item.id === parseInt(e.target.dataset.id)) {
                if(item.quantity <= 0) {
                    return {...item, quantity: 0}
                } else {
                    return {...item, quantity: item.quantity - 1}
                }
            } else {
                return item;
            }
        })
        setItems(newItems);
    }

    function increase(e) {
        
        const newItems = items.map(item=>{

            if(item.id === parseInt(e.target.dataset.id)) {
                return {...item, quantity: item.quantity + 1}
            } else {
                return item;
            }
        })
        setItems(newItems);
    }

    function onChange(e) {
        if(e.target.value < 0) {
            e.target.value = 0;
        } else {    
            const newItems = items.map(item=>{
                if(item.id === parseInt(e.target.dataset.id)) {
                    return {...item, quantity: parseInt(e.target.value)}
                } else {
                    return item;
                }
            })
            setItems(newItems);
        }
        
    }
    
    if(error) {
        return (
            <p>{error}</p>
        )
    }

    if(loading) {
        return (
        <p> Loading... Please Wait </p>
        )
    }

    return (
        <div className={styles.cards}>
            {items.map(item => 
                <div className={styles.card} key={item.id}>
                    <div className={styles.imageDiv}>
                        <img src={item.image} className={styles.image} alt="" />
                    </div>
                    <div className={styles.titleDiv}>
                        <p className={styles.title}>{item.title}</p>
                    </div>
                    <div className={styles.priceButtons}>
                        <div>
                        <p className={styles.price}>$ {item.price}</p>
                        </div>
                        <div className={styles.buttons}>
                            <button data-id={item.id} className={styles.buttonminus} onClick={decrease}>-</button>
                            <input data-id={item.id} className={styles.input} onChange={onChange} value={item.quantity} maxLength='1' type='number'/>
                            <button data-id={item.id} className={styles.buttonadd} onClick={increase}>+</button>
                        </div>
                    </div>
                </div>
            )}      
        </div>
    )

}

export default Shop;