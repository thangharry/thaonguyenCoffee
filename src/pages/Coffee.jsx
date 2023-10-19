import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./Coffee.module.scss";
import kemsua from "../img/pagecoffee-kemsua.jpg";
import bacsiuda from "../img/pagecoffee-bacsiuda.jpg";
import caraMachiata from "../img/pagecoffee-caramachiata.jpg";
import mochaMachiato from "../img/pagecoffee-macchiato.jpg";
import { Link } from "react-router-dom";

export let coffeeProduct = [
    {
        id: 1,
        img: kemsua,
        name: "cà phê đen ",
        price: 18,
    },
    {
        id: 2,

        img: bacsiuda,
        name: "cà phê sữa",
        price: 22,
    },
    {
        id: 3,

        img: caraMachiata,
        name: "cà phê sữa tươi",
        price: 25,
    },
    {
        id: 4,

        img: mochaMachiato,
        name: "cao cao sữa",
        price: 25,
    },

    {
        id: 5,

        img: mochaMachiato,
        name: "cao cao kem trứng nướng",
        price: 30,
    },
    {
        id: 6,

        img: mochaMachiato,
        name: "bạc sỉu đá",
        price: 28,
    },
    {
        id: 7,

        img: mochaMachiato,
        name: "cà phê sữa chua",
        price: 30,
    },
    {
        id: 8,

        img: mochaMachiato,
        name: "cà phê kem muối",
        price: 30,
    },
    {
        id: 9,

        img: mochaMachiato,
        name: "cà phê kem trứng",
        price: 30,
    },

    {
        id: 10,

        img: mochaMachiato,
        name: "cà phê kem nâu tiramisu đá",
        price: 30,
    },
];

function Coffee(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: kemsua,
            name: "cà phê đen ",
            price: 18,
        },
        {
            id: 2,

            img: bacsiuda,
            name: "cà phê sữa",
            price: 22,
        },
        {
            id: 3,

            img: caraMachiata,
            name: "cà phê sữa tươi",
            price: 25,
        },
        {
            id: 4,

            img: mochaMachiato,
            name: "cao cao sữa",
            price: 25,
        },

        {
            id: 5,

            img: mochaMachiato,
            name: "cao cao kem trứng nướng",
            price: 30,
        },
        {
            id: 6,

            img: mochaMachiato,
            name: "bạc sỉu đá",
            price: 28,
        },
        {
            id: 7,

            img: mochaMachiato,
            name: "cà phê sữa chua",
            price: 30,
        },
        {
            id: 8,

            img: mochaMachiato,
            name: "cà phê kem muối",
            price: 30,
        },
        {
            id: 9,

            img: mochaMachiato,
            name: "cà phê kem trứng",
            price: 30,
        },

        {
            id: 10,

            img: mochaMachiato,
            name: "cà phê kem nâu tiramisu đá",
            price: 30,
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
                    <Link to={`/ca-phe.html/${i.id}`}>
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
                    cà phê
                </Typography>

                <Grid container>{mapProducts}</Grid>
            </Container>
        </div>
    );
}

export default Coffee;
