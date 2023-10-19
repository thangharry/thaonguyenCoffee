import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import Header from "../components/Header";
import SlideBar from "../components/SlideBar";
import { Grid } from "@mui/material";
import homeBaner from "../img/homeBaner.jpg";
import homeBaner2 from "../img/homeBaner02.jpg";
import storeCoffee from "../img/storeCoffee.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
function Home(props) {
    // useEffect
    useEffect(() => {
        setTimeout(() => {
            AOS.init();
            AOS.refresh();
        }, 300);
    }, []);
    // ------------
    return (
        <div>
            <SlideBar />
            <Grid container className={styles.baner}>
                <Grid item xs={12} data-aos="zoom-in-down">
                    <div className={styles.homeBaner}>
                        <Link>
                            <img src={homeBaner} alt="" />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} data-aos="zoom-in">
                    <div className={styles.homeBaner}>
                        <Link>
                            <img src={homeBaner2} alt="" />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div
                        className={styles.homeBaner}
                        data-aos="fade-up"
                        data-aos-duration="5000"
                    >
                        <Link to="he-thong-cua-hang">
                            <img
                                src={storeCoffee}
                                alt=""
                                className="homeBaner4"
                                style={{ height: "30rem" }}
                            />
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
