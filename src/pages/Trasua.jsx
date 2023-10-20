import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Trasua.module.scss";
import kemsua from "../img/pagecoffee-kemsua.jpg";
import bacsiuda from "../img/pagecoffee-bacsiuda.jpg";
import caraMachiata from "../img/pagecoffee-caramachiata.jpg";
import mochaMachiato from "../img/pagecoffee-macchiato.jpg";

export let coffeeProduct = [
    {
        id: 1,
        img: kemsua,
        name: "Trà sữa truyền thống",
        price: 25,
    },
    {
        id: 2,

        img: bacsiuda,
        name: "Trà sữa trân châu caramel",
        price: 25,
    },
    {
        id: 3,

        img: caraMachiata,
        name: "Trà sữa kem trứng nướng",
        price: 30,
    },
    {
        id: 4,

        img: mochaMachiato,
        name: "Trà sữa socola thạch socola",
        price: 30,
    },
    {
        id: 5,

        img: mochaMachiato,
        name: "Trà sữa đặc biệt",
        price: 35,
    },
    {
        id: 6,

        img: mochaMachiato,
        name: " Trà sữa chân châu đường đen",
        price: 35,
    },
];

function Trasua(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: kemsua,
            name: "Trà sữa truyền thống",
            price: 25,
        },
        {
            id: 2,

            img: bacsiuda,
            name: "Trà sữa trân châu caramel",
            price: 25,
        },
        {
            id: 3,

            img: caraMachiata,
            name: "Trà sữa kem trứng nướng",
            price: 30,
        },
        {
            id: 4,

            img: mochaMachiato,
            name: "Trà sữa socola thạch socola",
            price: 30,
        },
        {
            id: 5,

            img: mochaMachiato,
            name: "Trà sữa đặc biệt",
            price: 35,
        },
        {
            id: 6,

            img: mochaMachiato,
            name: " Trà sữa chân châu đường đen",
            price: 35,
        },
    ];

    let mapProducts = coffeeProduct.map((i) => {
        return (
            <Grid
                item
                xs={6}
                md={4}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                // rowSpacing={{ md: 3 }}
                className={styles.productItem}
            >
                <div className={styles.img}>
                    <Link to={`/tra-sua.html/${i.id}`}>
                        <img src={i.img} alt="kemsua" />
                    </Link>
                </div>
                <div className={styles.title}>
                    <Typography variant="h5" component="h3">
                        <Link to="">{i.name}</Link>
                    </Typography>
                </div>
                <div className={styles.price}>
                    <Typography component="body1">
                        Giá:
                        <b>{i.price}.000 VNĐ</b>
                    </Typography>
                </div>
            </Grid>
        );
    });
    return (
        <div>
            <Container className={styles.wrapbody}>
                <Typography
                    variant="h3"
                    component="h1"
                    className={styles.freeze}
                >
                    trà sữa
                </Typography>

                <Grid container>{mapProducts}</Grid>
            </Container>
        </div>
    );
}

export default Trasua;
