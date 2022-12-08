import React from "react";
import ProductItem from "./item/ProductItem.jsx";
import styles from './overlay.module.css'
import Product from "../cart/item/Product";

/*const overlayObj = [
    {
        id: 1,
        title: "Название 1",
        price: "36 000",
        img: "/img/1.jpeg"
    },
    {
        id: 2,
        title: "Название 2",
        price: "36 000",
        img: "/img/1.jpeg"
    },
    {
        id: 2,
        title: "Название 3",
        price: "36 000",
        img: "/img/1.jpeg"
    },
    {
        id: 4,
        title: "Название 4",
        price: "36 000",
        img: "/img/1.jpeg"
    },
    {
        id: 5,
        title: "Название 5",
        price: "36 000",
        img: "/img/1.jpeg"
    },

]*/

const Overlay = (props) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.product}>
                <div className={styles.title_block}>
                    <h2>Заявки</h2>
                    <button className={styles.close_btn} onClick={props.closeItem}>X</button>
                </div>

                {
                    props.overlayProp.length > 0 ?

                    <div className={styles.product_list}>
                        {
                            props.overlayProp.map(obj => {
                                return (
                                    <div>
                                        <ProductItem
                                            key={obj.id}
                                            id={obj.id}
                                            title={obj.title}
                                            price={obj.price}
                                            img={obj.image}
                                            deleteItems={props.deleteItems}
                                        />

                                    </div>
                                )
                            })
                        }

                    </div>
                    : <h2>Заявок нет </h2>
                }
                <div className={styles.total_price}>
                    <p className="total-price-text">Итог: </p>
                    <p className='total-price-summ'>{props.total_price}</p>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}

export default Overlay;
