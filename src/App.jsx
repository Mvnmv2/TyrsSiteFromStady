import React from 'react';
import './App.css'
import Header from './components/header/Header.jsx'
import Banner from "./components/banner/Banner.jsx";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer.jsx";
import Overlay from "./components/overlay/Overlay.jsx";
import axios from "axios";
import {Routes, Route} from 'react-router-dom';
import Favorites from "./favorites/Favorites";
import Home from "./components/Home";
import Form from "./components/form/Form";

export const AppContext = React.createContext({})


function App() {
    //состояние корзины
    const [overlayOpen, setOverlayOpen] = React.useState(false);
    //хранение данных туров
    let [tyrs, setTyrs] = React.useState([])
    //Хранение объектов в корзине
    let [overlayItems, setOverlayItems] = React.useState([])
    //Для поиска
    const [search, setSearch] = React.useState('')
    //Для хранения избранных заявок
    let [favorites, setFavorites] = React.useState([])

    //Получение обектов из mockapi и сохранение их в State
    React.useEffect(() => {

        async function axiosData() {

            const tyrsData = await axios.get('https://637f91ce2f8f56e28e904f0a.mockapi.io/tyrs')
            const cartData = await axios.get('https://637f91ce2f8f56e28e904f0a.mockapi.io/cart')
            const favoritesData = await axios.get('https://637f91ce2f8f56e28e904f0a.mockapi.io/favorites')

            setTyrs(tyrsData.data)
            setOverlayItems(cartData.data)
            setFavorites(favoritesData.data)
        }

        axiosData();


    }, [])


    const deleteItems = (id) => {
        axios.delete(`https://637f91ce2f8f56e28e904f0a.mockapi.io/cart/${id}`)
        setOverlayItems((objDelete) => objDelete.filter(item => item.id !== id));
    }


    const isAdded = (myId) => {
        return overlayItems.some((objIsAdded) => objIsAdded.myId === myId)
    }

    const isFav = (myId) => {
        return favorites.some((objIsFav) => objIsFav.myId === myId)
    }

    return (
        <AppContext.Provider
            value={{
                tyrs,
                setTyrs,
                overlayItems,
                setOverlayItems,
                favorites,
                setFavorites,
                isAdded,
                isFav
            }}
        >
            <div className="app">

                {
                    overlayOpen ? <Overlay


                        total_price={
                            overlayItems.reduce((element = overlayItems.length, obj) =>
                                element + obj.price, 0
                            )
                        }


                        overlayProp={overlayItems}
                        deleteItems={deleteItems}
                        closeItem={() => setOverlayOpen(false)}
                    /> : ""
                }
                <Header openOverlay={() => setOverlayOpen(true)}
                        overlayItems={overlayItems}
                />
                <Routes>
                    <Route path='/favorites' element={
                        <Favorites
                            favorites={favorites}
                            setFavorites={setFavorites}
                            item={tyrs}
                            overlayItems={overlayItems}
                            setOverlayItems={setOverlayItems}
                        />
                    }/>
                </Routes>
                <Routes>
                    <Route path='/'
                           element={
                               <Home
                                   item={tyrs}
                                   overlayItems={overlayItems}
                                   setOverlayItems={setOverlayItems}
                                   setSearch={setSearch}
                                   search={search}
                                   favorites={favorites}
                                   setFavorites={setFavorites}
                               />
                           }/>
                    <Route path={'/form'}
                           element={
                               <Form/>
                           }
                    />

                </Routes>
                <Footer/>
            </div>

        </AppContext.Provider>
    )
}

export default App