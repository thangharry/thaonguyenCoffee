import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nuocep.module.scss";
import epcam from "../img/nuocepcamTN.jpeg";
import epoi from "../img/nuocepoiTN.jpeg";
import epduahau from "../img/nuocepduahauTN.jpeg";
import epdua from "../img/nuocepduaTN.jpeg";

// sửa ảnh

import mochaMachiato from "../img/pagecoffee-macchiato.jpg";

export let coffeeProduct = [
    {
        id: 1,
        img: epcam,
        name: "nước ép cam",
        price: 25,
    },
    {
        id: 2,

        img: epduahau,
        name: "nước ép dưa hấu",
        price: 28,
    },
    {
        id: 3,

        img: epoi,
        name: "nước ép ổi",
        price: 28,
    },
    {
        id: 4,

        img: epdua,
        name: "nước ép thơm",
        price: 28,
    },
    {
        id: 5,

        img: mochaMachiato,
        name: "nước ép chanh dây",
        price: 28,
    },
    {
        id: 6,

        img: mochaMachiato,
        name: "nước ép táo",
        price: 30,
    },

    {
        id: 7,

        img: mochaMachiato,
        name: "nước ép cà rốt",
        price: 30,
    },

    {
        id: 8,

        img: mochaMachiato,
        name: "nước ép cam - cà rốt",
        price: 30,
    },

    {
        id: 9,

        img: mochaMachiato,
        name: "nước ép cam - chanh dây",
        price: 30,
    },

    {
        id: 10,

        img: mochaMachiato,
        name: "nước ép mix vị",
        price: 30,
    },

    {
        id: 11,

        img: mochaMachiato,
        name: "nước ép nguyên chất",
        price: 35,
    },
];

function Nuocep(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: epcam,
            name: "nước ép cam",
            price: 25,
        },
        {
            id: 2,

            img: epduahau,
            name: "nước ép dưa hấu",
            price: 28,
        },
        {
            id: 3,

            img: epoi,
            name: "nước ép ổi",
            price: 28,
        },
        {
            id: 4,

            img: epdua,
            name: "nước ép thơm",
            price: 28,
        },
        {
            id: 5,

            img: mochaMachiato,
            name: "nước ép chanh dây",
            price: 28,
        },
        {
            id: 6,

            img: mochaMachiato,
            name: "nước ép táo",
            price: 30,
        },

        {
            id: 7,

            img: mochaMachiato,
            name: "nước ép cà rốt",
            price: 30,
        },

        {
            id: 8,

            img: mochaMachiato,
            name: "nước ép cam - cà rốt",
            price: 30,
        },

        {
            id: 9,

            img: mochaMachiato,
            name: "nước ép cam - chanh dây",
            price: 30,
        },

        {
            id: 10,

            img: mochaMachiato,
            name: "nước ép mix vị",
            price: 30,
        },

        {
            id: 11,

            img: mochaMachiato,
            name: "nước ép nguyên chất",
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
                    <Link to={`/nuoc-ep.html/${i.id}`}>
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
                    Nước ép trái cây tươi
                </Typography>
                {/* <Typography variant="body1" className={styles.contentProduct}>
                    Sảng khoái với thức uống đá xay phong cách Việt. Freeze là
                    thức uống đá xay mát lạnh được pha chế từ những nguyên liệu
                    thuần túy của Việt Nam.
                </Typography> */}
                <Grid container>{mapProducts}</Grid>
            </Container>
        </div>
    );
}

export default Nuocep;
