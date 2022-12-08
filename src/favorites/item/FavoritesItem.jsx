import React from "react";
import styles from "./favoritesItem.module.css"
import axios from "axios";

const  FavoritesItem = (props) => {

    const [added, setAdded] = React.useState(false);
    const [fav, setFav] = React.useState(false);

    // const onClickFav = () => {
    //     setFav(!fav);
    //     let id = props.id
    //     let title = props.title
    //     let description = props.description
    //     let price = props.price
    //     let image = props.img
    //     props.favBtn({id, title, description, price, image});
    // }

    const onClickAdd = () => {
        setAdded(!added);
        let id = props.id
        let title = props.title
        let description = props.description
        let price = props.price
        let image = props.img
        props.onPlus({id, title, description, price, image});
    }

    const onDelete = () => {
        props.onDeleteFav(props.id)
    }

    return (
        <div className={styles.cart_item}>

            <button className={styles.fav_btn} onClick={onDelete}>X</button>

            <img className={styles.cart_img} src={props.img} alt=""/>
            <p className={styles.cart_title}>{props.title}</p>
            <p className="cart_desc">Сочи Из Москва - 7 Ночей</p>
            <p className="cart_desc">05.12.22 - 2 взрослых</p>
            <br/>
            <p className={styles.price}>цена:</p>
            <div className={styles.cart_price}>
                <span>{props.price}</span>
                <button className={styles.add_card}
                        onClick={onClickAdd}>
                    {added ?  <img src={added ? './img/icon.png' : ''} width={12} alt=""/>
                    : 'Оставить заявку' }
                </button>

            </div>
        </div>
    )
}
export default FavoritesItem;