import React from "react";
import Children from "./Children";

const FirstComponent = () => {
    let myWidth = "150px";
    return (
        <div className="first">
            <h1>Первый текст</h1>
            <p>текст 2</p>
            <Children text="текст который хранится в пропсах" width={myWidth} />
        </div>
    );
}

export default FirstComponent;