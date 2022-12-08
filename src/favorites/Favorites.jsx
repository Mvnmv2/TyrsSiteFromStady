import React from 'react';
import styles from "./favorites.module.css"
import axios from "axios";
import FavoritesItem from "./item/FavoritesItem";
import {AppContext} from "../App.jsx";

const Favorites = (props) => {

    const context = React.useContext(AppContext);
    const onAddOverlay = (obj) => {
        axios.post('https://637f91ce2f8f56e28e904f0a.mockapi.io/cart', obj)
        context.setOverlayItems([...props.overlayItems, obj]);
    }

    const onDeleteFav = (id) => {
        console.log(id);
        axios.delete(`https://637f91ce2f8f56e28e904f0a.mockapi.io/favorites/${id}`)
        context.setFavorites((fav) => fav.filter(item => item.id !== id));
    }

    return (
        <div className={styles.cart_section}>
            <div className={styles.search}>
                <h2>Избранные туры:</h2>
            </div>

            <div className={styles.cart}>
                {
                    props.favorites.map(obj => {
                        return (
                            <div>
                                <FavoritesItem
                                    key={obj.id}
                                    id={obj.id}
                                    title={obj.title}
                                    price={obj.price}
                                    img={obj.img}

                                    onDeleteFav={(id) => {
                                        onDeleteFav(id)
                                    }}

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

export default Favorites;