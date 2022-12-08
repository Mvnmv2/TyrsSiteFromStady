import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.logo}>
                LIVE-TYR
            </div>
            <p>
                Единый многоканальный номер: +7 (495) 151-88-08
                <br/>
                <br/>
                Уполномоченные агенства ООО «Туристические компании КаприС»
            </p>
        </footer>
    )
}

export default Footer;