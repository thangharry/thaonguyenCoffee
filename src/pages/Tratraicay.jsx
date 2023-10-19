import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styles from "./Tratraicay.module.scss";
import kemsua from "../img/pagecoffee-kemsua.jpg";
import bacsiuda from "../img/pagecoffee-bacsiuda.jpg";
import caraMachiata from "../img/pagecoffee-caramachiata.jpg";
import mochaMachiato from "../img/pagecoffee-macchiato.jpg";
import { Link } from "react-router-dom";

export let coffeeProduct = [
    {
        id: 1,
        img: kemsua,
        name: "trà đào trân châu",
        price: 30,
    },
    {
        id: 2,

        img: bacsiuda,
        name: "trà vải trân châu",
        price: 30,
    },
    {
        id: 3,

        img: caraMachiata,
        name: "trà ổi hồng chanh dây",
        price: 30,
    },
    {
        id: 4,

        img: mochaMachiato,
        name: "trà dâu tây",
        price: 30,
    },
    {
        id: 5,

        img: mochaMachiato,
        name: "trà mãng cầu trân châu",
        price: 35,
    },
    {
        id: 6,

        img: mochaMachiato,
        name: "trà đào - dâu tây",
        price: 35,
    },

    {
        id: 7,

        img: mochaMachiato,
        name: "trà sen vàng thạch giòn kem macchiato",
        price: 35,
    },

    {
        id: 8,

        img: mochaMachiato,
        name: "trà cam - chanh dây",
        price: 35,
    },

    {
        id: 9,

        img: mochaMachiato,
        name: "trà sen vàng long nhãn",
        price: 35,
    },

    {
        id: 10,

        img: mochaMachiato,
        name: "trà sen vàng hạt đác",
        price: 35,
    },

    {
        id: 11,

        img: mochaMachiato,
        name: "trà vải - dâu tây",
        price: 35,
    },
    {
        id: 12,

        img: mochaMachiato,
        name: "trà chanh dây thạch giòn kem macchiato",
        price: 35,
    },
];

function Tratraicay(props) {
    let coffeeProduct = [
        {
            id: 1,
            img: kemsua,
            name: "trà đào trân châu",
            price: 30,
        },
        {
            id: 2,

            img: bacsiuda,
            name: "trà vải trân châu",
            price: 30,
        },
        {
            id: 3,

            img: caraMachiata,
            name: "trà ổi hồng chanh dây",
            price: 30,
        },
        {
            id: 4,

            img: mochaMachiato,
            name: "trà dâu tây",
            price: 30,
        },
        {
            id: 5,

            img: mochaMachiato,
            name: "trà mãng cầu trân châu",
            price: 35,
        },
        {
            id: 6,

            img: mochaMachiato,
            name: "trà đào - dâu tây",
            price: 35,
        },

        {
            id: 7,

            img: mochaMachiato,
            name: "trà sen vàng thạch giòn kem macchiato",
            price: 35,
        },

        {
            id: 8,

            img: mochaMachiato,
            name: "trà cam - chanh dây",
            price: 35,
        },

        {
            id: 9,

            img: mochaMachiato,
            name: "trà sen vàng long nhãn",
            price: 35,
        },

        {
            id: 10,

            img: mochaMachiato,
            name: "trà sen vàng hạt đác",
            price: 35,
        },

        {
            id: 11,

            img: mochaMachiato,
            name: "trà vải - dâu tây",
            price: 35,
        },
        {
            id: 12,

            img: mochaMachiato,
            name: "trà chanh dây thạch giòn kem macchiato",
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
                    <Link to={`/tra-trai-cay.html/${i.id}`}>
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
                    Trà trái cây
                </Typography>

                <Grid container>{mapProducts}</Grid>
            </Container>
        </div>
    );
}

export default Tratraicay;
