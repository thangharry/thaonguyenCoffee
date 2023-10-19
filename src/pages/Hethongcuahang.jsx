import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./Hethongcuahang.module.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WifiIcon from "@mui/icons-material/Wifi";
import StorefrontIcon from "@mui/icons-material/Storefront";
function Hethongcuahang(props) {
    return (
        <div className="thab" style={{ marginBottom: "4rem" }}>
            <Container>
                <Typography
                    variant="h3"
                    component="h1"
                    className={`${styles.title} ${styles.resTitle}`}
                >
                    quán cà phê
                </Typography>
                <Grid container>
                    <Grid item md={5} xs={12} className={styles.contentStore}>
                        <Box className={styles.contentStore__Container}>
                            <Typography variant="h5" component="h2">
                                Thảo Nguyên coffee
                            </Typography>
                            <ul>
                                <li>
                                    <Typography
                                        variant="body1"
                                        className="addressStore"
                                    >
                                        <StorefrontIcon className="icon" />
                                        <b>địa chỉ:</b>
                                        <address>06 nguyễn đức cảnh q7</address>
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body1">
                                        <LocalPhoneIcon className="icon" />
                                        <b>số điện thoại:</b>
                                        0123456789
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body1">
                                        <span>open</span>mở cửa 7:00 -22:00 *7
                                        ngày/tuần
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body1">
                                        <WifiIcon sx={{ marginRight: 1 }} />
                                        wifi miễn phí
                                    </Typography>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12} className={styles.mapStore}>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.68333782725!2d106.71654501701857!3d10.836482666069543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527d684538faf%3A0xa654bdc36bcd9d51!2zNDMvNTggxJAuIEtoYSBW4bqhbiBDw6JuLCBIaeG7h3AgQsOsbmggQ2jDoW5oLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1695998601839!5m2!1svi!2s"
                                width="600"
                                height="450"
                                // style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Hethongcuahang;
