import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./Soda.module.scss";
import kemsua from "../img/cafedendaTN.jpg";
import bacsiuda from "../img/pagecoffee-bacsiuda.jpg";
import caraMachiata from "../img/pagecoffee-caramachiata.jpg";
import mochaMachiato from "../img/pagecoffee-macchiato.jpg";
import { Link } from "react-router-dom";

export let coffeeProduct = [
    {
        id: 1,
        img: kemsua,
        name: "soda chanh",
        price: 45,
    },
    {
        id: 2,

        img: bacsiuda,
        name: "soda chanh dây",
        price: 29,
    },
    {
        id: 3,

        img: caraMachiata,
        name: "soda việt quất",
        price: 69,
    },
    {
        id: 4,

        img: mochaMachiato,
        name: "soda bạc hà",
        price: 69,
    },
    {
        id: 5,

        img: mochaMachiato,
        name: "soda dâu",
        price: 69,
    },
];

function Soda(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: kemsua,
            name: "soda chanh",
            price: 45,
        },
        {
            id: 2,

            img: bacsiuda,
            name: "soda chanh dây",
            price: 29,
        },
        {
            id: 3,

            img: caraMachiata,
            name: "soda việt quất",
            price: 69,
        },
        {
            id: 4,

            img: mochaMachiato,
            name: "soda bạc hà",
            price: 69,
        },
        {
            id: 5,

            img: mochaMachiato,
            name: "soda dâu",
            price: 69,
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
                    <Link to={`/soda.html/${i.id}`}>
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
                    soda
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

export default Soda;
