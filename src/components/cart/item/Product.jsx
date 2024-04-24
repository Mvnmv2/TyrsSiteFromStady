import React from "react";
import styles from "./product.module.css"
import {AppContext} from "../../../App";

const Product = (props) => {

    const context = React.useContext(AppContext)

    const [added, setAdded] = React.useState(context.isAdded);
    const [fav, setFav] = React.useState(false);

    const onClickFav = () => {
        setFav(!fav);
        let id = props.id
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let img = props.img
        props.favBtnOnClickPlus({id, myId, title, description, price, img});
    }

    const onClickAdd = () => {
        setAdded(!added);
        let id = props.id
        let myId = props.myId
        let title = props.title
        let description = props.description
        let price = props.price
        let image = props.img
        props.onPlus({id, myId, title, description, price, image});
    }


    return (
        <div className={styles.cart_item}>
            {
               context.isFav(props.myId) == false ?
                    <button className={styles.fav_btn} onClick={onClickFav}>Добавить в избранное</button>
                    : <button className={styles.fav_btn_add} onClick={onClickFav}>Добавлено в избранное</button>
            }


            <img className={styles.cart_img} src={process.env.PUBLIC_URL + props.img} alt="Картинка"/>
            <p className={styles.cart_title}>{props.title}</p>
            <p className="cart_desc">Сочи Из Москва - 7 Ночей</p>
            <p className="cart_desc">05.12.22 - 2 взрослых</p>
            <br/>
            <p className={styles.price}>цена:</p>
            <div className={styles.cart_price}>
                <span>{props.price}</span>
                <button className={styles.add_card}
                        onClick={onClickAdd}>
                    {context.isAdded(props.myId) ?  <img src={context.isAdded(props.myId) ? require("../../../assets/images/icon.png") : ''} width={12} alt=""/>
                    : 'Оставить заявку' }
                </button>
            </div>
        </div>
    )
}
export default Product;