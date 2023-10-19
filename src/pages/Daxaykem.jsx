import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Daxaykem.module.scss";
import kemsua from "../img/pagecoffee-kemsua.jpg";
import bacsiuda from "../img/pagecoffee-bacsiuda.jpg";
import caraMachiata from "../img/pagecoffee-caramachiata.jpg";
import mochaMachiato from "../img/pagecoffee-macchiato.jpg";

export let coffeeProduct = [
    {
        id: 1,
        img: kemsua,
        name: "socola-cookie đá xay kem",
        price: 40,
    },
    {
        id: 2,

        img: bacsiuda,
        name: "match đá xay kem",
        price: 40,
    },
    {
        id: 3,

        img: caraMachiata,
        name: "khoai môn đá xay kem",
        price: 40,
    },
    {
        id: 4,

        img: mochaMachiato,
        name: "việt quất đá xay kem",
        price: 40,
    },
    {
        id: 5,

        img: mochaMachiato,
        name: "dâu tây đá xay kem",
        price: 40,
    },
    {
        id: 6,

        img: mochaMachiato,
        name: " sữa chua đậu đỏ đá xay",
        price: 35,
    },
];

function Daxaykem(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: kemsua,
            name: "socola-cookie đá xay kem",
            price: 40,
        },
        {
            id: 2,

            img: bacsiuda,
            name: "match đá xay kem",
            price: 40,
        },
        {
            id: 3,

            img: caraMachiata,
            name: "khoai môn đá xay kem",
            price: 40,
        },
        {
            id: 4,

            img: mochaMachiato,
            name: "việt quất đá xay kem",
            price: 40,
        },
        {
            id: 5,

            img: mochaMachiato,
            name: "dâu tây đá xay kem",
            price: 40,
        },
        {
            id: 6,

            img: mochaMachiato,
            name: " sữa chua đậu đỏ đá xay",
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
                    <Link to={`/da-xay-kem.html/${i.id}`}>
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
                    đá xay kem
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

export default Daxaykem;
