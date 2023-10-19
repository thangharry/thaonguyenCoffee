import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./Monkhac.module.scss";
import kemsua from "../img/pagecoffee-kemsua.jpg";
import bacsiuda from "../img/pagecoffee-bacsiuda.jpg";
import caraMachiata from "../img/pagecoffee-caramachiata.jpg";
import mochaMachiato from "../img/pagecoffee-macchiato.jpg";
import { Link } from "react-router-dom";

export let coffeeProduct = [
    {
        id: 1,
        img: kemsua,
        name: "trà chanh",
        price: 25,
    },
    {
        id: 2,

        img: bacsiuda,
        name: "trà hoa cúc nóng",
        price: 25,
    },
    {
        id: 3,

        img: caraMachiata,
        name: "trà gừng mật ong nóng",
        price: 25,
    },
    {
        id: 4,

        img: mochaMachiato,
        name: "trà lipton",
        price: 25,
    },
    {
        id: 5,

        img: mochaMachiato,
        name: "trà tắc xí mụi",
        price: 25,
    },

    {
        id: 6,

        img: mochaMachiato,
        name: "dừa tươi",
        price: 25,
    },

    {
        id: 7,

        img: mochaMachiato,
        name: "nước ngọt",
        price: 20,
    },
];

function Monkhac(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: kemsua,
            name: "trà chanh",
            price: 25,
        },
        {
            id: 2,

            img: bacsiuda,
            name: "trà hoa cúc nóng",
            price: 25,
        },
        {
            id: 3,

            img: caraMachiata,
            name: "trà gừng mật ong nóng",
            price: 25,
        },
        {
            id: 4,

            img: mochaMachiato,
            name: "trà lipton",
            price: 25,
        },
        {
            id: 5,

            img: mochaMachiato,
            name: "trà tắc xí mụi",
            price: 25,
        },

        {
            id: 6,

            img: mochaMachiato,
            name: "dừa tươi",
            price: 25,
        },

        {
            id: 7,

            img: mochaMachiato,
            name: "nước ngọt",
            price: 20,
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
                    <Link to={`/mon-khac.html/${i.id}`}>
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
                <Typography variant="h3" component="h1" className={styles.tea}>
                    Món ngon khác
                </Typography>
                {/* <Typography variant="body1" className={styles.contentProduct}>
                    Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách
                    hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của
                    bản thân và tận hưởng một cảm giác thật khoan khoái, tươi
                    mới.
                </Typography> */}
                <Grid container>{mapProducts}</Grid>
            </Container>
        </div>
    );
}

export default Monkhac;
