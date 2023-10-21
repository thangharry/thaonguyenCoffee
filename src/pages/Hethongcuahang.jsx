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
                    <Grid item md={6} xs={12} className={styles.contentStore}>
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
                                        <address>
                                            5 Đường Số 13, Khu Phố 5, P. Hiệp
                                            Bình Chánh TP. HCM
                                        </address>
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body1">
                                        <LocalPhoneIcon className="icon" />
                                        <b>số điện thoại:</b>
                                        0932609233
                                    </Typography>
                                </li>

                                <li>
                                    <Typography variant="body1">
                                        <span>open</span>mở cửa 7:00 - 22:00 *7
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
                    <Grid item md={6} xs={12} className={styles.mapStore}>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.
8466731457767!2d106.73083067520379!3d10.828646747155629!2m3!1f0!2f0!3f0!
3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293f3ec83dad%3A0xddcb6d2247c46a8b
!2sTH%E1%BA%A2O%20NGUY%C3%8AN%20COFFEE%20-%20TEA%20-%20JUICE!5e0!3m2!1svi!2
s!4v1697899212110!5m2!1svi!2s"
                                width="600"
                                height="450"
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
