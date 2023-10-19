import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/highlands-logo.png";
import styles from "./Header.module.scss";
import { Container, Grid, Typography } from "@mui/material";

import TNLOGO from "../img/thaonguyênlogo.png";
import iconCoffee from "../img/iconcoffee-cup.png";
import iconmiketea from "../img/iconbubble-tea.png";
import iconyoghurt from "../img/iconyoghurt.png";
import icondaxaykem from "../img/icondaxaykem.png";
import iconbingsu from "../img/iconbingsu.png";
import icontratraicay from "../img/iconicetea.png";
import iconsinhto from "../img/iconsinhto.png";
import iconnuocep from "../img/iconnuocep.png";
import iconsoda from "../img/iconsoda.png";
import iconcoffeeShop from "../img/iconcoffee-shop.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "@mui/icons-material/Close";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import NotesIcon from "@mui/icons-material/Notes";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneIcon from "@mui/icons-material/Phone";

import { Button } from "react-bootstrap";
function Header(props) {
    let [show, setShow] = useState(true);

    let handleShowMenu = () => {
        setShow(false);
    };

    let handleHiddenMenu = () => {
        setShow(true);
    };
    return (
        <Container className={styles.container}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Grid container className={styles.wrapHeader}>
                <Grid item xs={3}>
                    <span>
                        <Link to="/">
                            <img
                                src={TNLOGO}
                                alt="imageCoffee"
                                className={styles.logo}
                            />
                        </Link>
                    </span>
                </Grid>

                <Grid
                    item
                    className={`${styles.listContentHeader} ${
                        show ? styles.hidden : styles.show
                    }`}
                    xs={8}
                >
                    <span className={styles.IconCloseMenu}>
                        <Button onClick={() => handleHiddenMenu()}>
                            <CloseIcon fontSize="large" />
                        </Button>
                    </span>

                    <span>
                        <span className={styles.resIcon}>
                            <StoreMallDirectoryIcon fontSize="large" />
                        </span>
                        <NavLink to="he-thong-cua-hang">Quán cà phê</NavLink>
                    </span>

                    <span className={styles.boxThucdon}>
                        <span className={styles.resIcon}>
                            <NotesIcon fontSize="large" />
                        </span>
                        <NavLink className={styles.thucdon} to={"ca-phe.html"}>
                            thực đơn
                        </NavLink>
                        <span className={styles.resIcon}>
                            <ArrowForwardIosIcon fontSize="medium" />
                        </span>
                        <span className={styles.menuthucdon}>
                            <Grid container>
                                <Grid
                                    item
                                    className={styles.col1}
                                    md={10}
                                    xs={8}
                                >
                                    <ul className={styles.listmenu}>
                                        <li className={styles.itemmenu}>
                                            <Link to="/ca-phe.html">
                                                <img
                                                    src={iconCoffee}
                                                    alt="iconcoffee"
                                                    className={styles.icon}
                                                />
                                                cà phê
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="/tra-sua.html">
                                                <img
                                                    src={iconmiketea}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                Trà sữa
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="sua-chua.html">
                                                <img
                                                    src={iconyoghurt}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                sữa chua
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="da-xay-kem.html">
                                                <img
                                                    src={icondaxaykem}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                đá xay kem
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="bingsu.html">
                                                <img
                                                    src={iconbingsu}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                bingsu kem
                                            </Link>
                                        </li>
                                    </ul>

                                    <ul className={styles.listmenu}>
                                        <li className={styles.itemmenu}>
                                            <Link to="/tra-trai-cay.html">
                                                <img
                                                    src={icontratraicay}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                trà trái cây
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="/sinh-to.html">
                                                <img
                                                    src={iconsinhto}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                sinh tố
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="/nuoc-ep.html">
                                                <img
                                                    src={iconnuocep}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                Nước ép
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="soda.html">
                                                <img
                                                    src={iconsoda}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                soda
                                            </Link>
                                        </li>

                                        <li className={styles.itemmenu}>
                                            <Link to="mon-khac.html">
                                                <img
                                                    src={iconcoffeeShop}
                                                    alt=""
                                                    className={styles.icon}
                                                />
                                                món khác
                                            </Link>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </span>
                    </span>

                    <span>
                        <span className={styles.resIcon}>
                            <AddShoppingCartIcon fontSize="large" />
                        </span>
                        <NavLink to="gio-hang.html">Giỏ hàng</NavLink>
                    </span>

                    <span>
                        <span className={styles.resIcon}>
                            <PhoneIcon fontSize="large" />
                        </span>
                        <NavLink to="lien-he.html">liên hệ</NavLink>
                    </span>
                </Grid>

                <Grid item xs={1} className={styles.iconMenu}>
                    <Button
                        style={{
                            padding: "0",
                            border: "1",
                        }}
                        onClick={() => handleShowMenu()}
                    >
                        <MenuSharpIcon fontSize="large" />
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Header;
