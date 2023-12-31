import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./Sinhto.module.scss";
import kemsua from "../img/pagecoffee-kemsua.jpg";
import bacsiuda from "../img/pagecoffee-bacsiuda.jpg";
import caraMachiata from "../img/pagecoffee-caramachiata.jpg";
import mochaMachiato from "../img/pagecoffee-macchiato.jpg";
import { Link } from "react-router-dom";

export let coffeeProduct = [
    {
        id: 1,
        img: kemsua,
        name: "sinh tố bơ ",
        price: 35,
    },
    {
        id: 2,

        img: bacsiuda,
        name: "sinh tố mãng cầu",
        price: 35,
    },
    {
        id: 3,

        img: caraMachiata,
        name: "sinh tố dâu",
        price: 35,
    },
    {
        id: 4,

        img: mochaMachiato,
        name: "sinh tố sapoche",
        price: 35,
    },

    {
        id: 5,

        img: mochaMachiato,
        name: "sinh tố xoài",
        price: 35,
    },
    {
        id: 6,

        img: mochaMachiato,
        name: "sinh tố việt quất",
        price: 35,
    },
    {
        id: 7,

        img: mochaMachiato,
        name: "sinh tố chanh dây",
        price: 35,
    },
    {
        id: 8,

        img: mochaMachiato,
        name: "sinh tố dừa",
        price: 35,
    },
    {
        id: 9,

        img: mochaMachiato,
        name: "sinh tố dừa - bơ",
        price: 40,
    },

    {
        id: 10,

        img: mochaMachiato,
        name: "sinh tố dừa - mãng cầu",
        price: 40,
    },
    {
        id: 11,

        img: mochaMachiato,
        name: "sinh tố dừa - dâu",
        price: 40,
    },
];

function Sinhto(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: kemsua,
            name: "sinh tố bơ ",
            price: 35,
        },
        {
            id: 2,

            img: bacsiuda,
            name: "sinh tố mãng cầu",
            price: 35,
        },
        {
            id: 3,

            img: caraMachiata,
            name: "sinh tố dâu",
            price: 35,
        },
        {
            id: 4,

            img: mochaMachiato,
            name: "sinh tố sapoche",
            price: 35,
        },

        {
            id: 5,

            img: mochaMachiato,
            name: "sinh tố xoài",
            price: 35,
        },
        {
            id: 6,

            img: mochaMachiato,
            name: "sinh tố việt quất",
            price: 35,
        },
        {
            id: 7,

            img: mochaMachiato,
            name: "sinh tố chanh dây",
            price: 35,
        },
        {
            id: 8,

            img: mochaMachiato,
            name: "sinh tố dừa",
            price: 35,
        },
        {
            id: 9,

            img: mochaMachiato,
            name: "sinh tố dừa - bơ",
            price: 40,
        },

        {
            id: 10,

            img: mochaMachiato,
            name: "sinh tố dừa - mãng cầu",
            price: 40,
        },
        {
            id: 11,

            img: mochaMachiato,
            name: "sinh tố dừa - dâu",
            price: 40,
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
                key={i.id}
            >
                <div className={styles.img}>
                    <Link to={`/sinh-to.html/${i.id}`}>
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
                <Typography variant="h3" component="h1">
                    sinh tố
                </Typography>

                <Grid container>{mapProducts}</Grid>
            </Container>
        </div>
    );
}

export default Sinhto;
