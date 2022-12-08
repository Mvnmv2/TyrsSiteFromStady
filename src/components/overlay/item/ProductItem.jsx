import React from "react";
import styles from './producrItem.module.css'

const ProductItem = (props) => {
      return (
        <div className={styles.product_item}>
            <img className={styles.product_img} src={props.img} alt="картинка"/>
            <h3 className={styles.product_title}>{props.title}
                <br/>
                <span className={styles.product_price}>{props.price}</span>
            </h3>
            <button onClick={ ()=> props.deleteItems(props.id)} className={styles.close_btn}>X</button>
        </div>
    )
}

export default ProductItem;