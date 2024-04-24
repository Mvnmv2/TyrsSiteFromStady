import Banner from "./banner/Banner";
import React from "react";
import Cart from "./cart/Cart";
import TestSlider from "./TestSlider";

const Home = (props) => {


    const item = [
    {
        id: 1,
        title: "Название 1",
        price: "36 000",
        img: '/img/1.jpeg'
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

]


    return (
        <>
            <TestSlider/>
            <Banner/>
            <div className="text_section">
                <h2>ТУРЫ ОТ LIVE-TYR</h2>
                <p>Сотрудничество более чем с 20 международными и национальными компаниями, работающими на отправку и
                    прием туристов, позволяет нам качественно предоставлять услуги туристам из России, Болгарии,
                    Румынии, Украины, Латвии, Литвы, Белоруссии, Эстонии, Молдавии и Казахстана. </p>
                <p>Международный туристический оператор является одной из международных компаний, организующих туры для
                    туристов из России, стран бывшего СССР и Восточной Европы. TEZ TOUR основан в 1994 году.
                    Туры:</p>
            </div>
            <Cart item={item}
                  overlayItems={props.overlayItems}
                  setOverlayItems={props.setOverlayItems}
                  setSearch={props.setSearch}
                  search={props.search}
                  favorites={props.favorites}
                  setFavorites={props.setFavorites}
            />
        </>
    )
}

export default Home;