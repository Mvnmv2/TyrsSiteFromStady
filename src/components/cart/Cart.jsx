import React from "react";
import Product from "./item/Product";
import styles from "./cart.module.css";
import axios from "axios";

const Cart = (props) => {

    const onAddOverlay = async (obj) => {
        try {
            const findOverlay = props.overlayItems.find(objOver => objOver.myId === obj.myId);
            if (findOverlay) {
                axios.delete(`https://637f91ce2f8f56e28e904f0a.mockapi.io/cart/${findOverlay.id}`)
                props.setOverlayItems((over) => over.filter(item => item.myId !== obj.myId))
            } else {
                 const {data} =  await axios.post('https://637f91ce2f8f56e28e904f0a.mockapi.io/cart', obj)
                props.setOverlayItems([...props.overlayItems, data]);
            }
        } catch {
            alert("Произошла ошибка")
        }
    }

    const onClickSearch = (inputValue) => {
        props.setSearch(inputValue.target.value)
    }

    const onAddFav = async (obj) => {
        try {
            const findFavorite = props.favorites.find(objFav => objFav.myId === obj.myId);
            if (findFavorite) {
                axios.delete(`https://637f91ce2f8f56e28e904f0a.mockapi.io/favorites/${findFavorite.id}`)
                props.setFavorites((over) => over.filter(item => item.myId !== obj.myId))
                //props.setFavorites((over) => over.filter(item => item.myId !== obj.myId))
            } else {
                const {data} = await axios.post('https://637f91ce2f8f56e28e904f0a.mockapi.io/favorites', obj)
                props.setFavorites([...props.favorites, data]);
            }
        } catch {
            alert("Произошла ошибка")
        }
    }

    return (
        <div className={styles.cart_section}>
            <div className={styles.search}>
                <h2>Туры:</h2>
                <div className={styles.search_block}>
                    <img src="/img/search.png" alt="Поиск"/>
                    <input onChange={onClickSearch} type="text" placeholder="Поиск"/>
                </div>
            </div>

            <div className={styles.cart}>
                {
                    props.item.filter((obj) => obj.title.toLowerCase()
                        .includes(props.search.toLowerCase()))
                        .map(item => {
                            return (
                                <div>
                                    <Product key={item.id}
                                             id={item.id}
                                             myId={item.myId}
                                             title={item.title}
                                             price={item.price}
                                             img={item.img}

                                             favBtnOnClickPlus={(favObj) => onAddFav(favObj)}
                                             onPlus={(cartObj) => {
                                                 console.log(cartObj)
                                                 onAddOverlay(cartObj)
                                             }
                                             }
                                    />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Cart;