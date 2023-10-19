import React from "react";
import styles from "./SlideBar.module.scss";
import Slide01 from "../img/sildeBar-01.png";
import Slide02 from "../img/sildeBar-02.jpg";
import Slide03 from "../img/sildeBar-03.jpg";
import Slide04 from "../img/sildeBar-04.png";
import Slide05 from "../img/sildeBar-05.png";
import Slide06 from "../img/sildeBar-06.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideBar() {
    let myProductList = [Slide02, Slide01, Slide03, Slide04, Slide05];
    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    // let array = myProductList.map((i) => {
    //     return <img src={i.src} alt="slider01" className={styles.slideMain} />;
    // });
    let array = myProductList.map((i, idx) => (
        <div key={idx} className={styles.sliderpvt}>
            <img src={i} alt={`slide ${idx}`} />
        </div>
    ));
    return (
        <div className={styles.container}>
            <div className={styles.listsliderBar}>
                <div className={styles.listImg}>
                    <Slider {...settings}>{array}</Slider>
                </div>
            </div>
        </div>
    );
}

export default SlideBar;
