import React from "react";
import styles from "./banner.module.css"
import {Link} from "react-router-dom";


const Banner = () => {
    return (
        <div className={styles.banner_section}>
            <div className={styles.banner}>
                <p className={styles.text_banner}>
                    Покупайте туры он-лайн
                    <br/>
                        <span>
                            без комиссии!
                        </span>
                    <br/>
                    <Link exact to={'/form'}>
                        <button className={styles.banner_btn}>Оставить заявку</button>
                    </Link>

                </p>
            </div>
        </div>
    )
}

export default Banner;

