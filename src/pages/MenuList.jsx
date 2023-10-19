import React, { useEffect } from "react";
import styles from "./MenuList.module.scss";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import caphe from "../img/highlansPHIN_SUA_DA_5.1.png";
import freeze from "../img/FREEZE-TRA-XANH-5.1.png";
import Tea from "../img/TRA-SEN-VANG-CN-5.1.png";
import AOS from "aos";
import "aos/dist/aos.css";

function MenuList(props) {
    // useEffect
    useEffect(() => {
        setTimeout(() => {
            AOS.init();
            AOS.refresh();
        }, 300);
    }, []);
    // ------------
    return (
        <Container className={styles.container}>
            <div className={styles.wrapItem}>
                <Grid container className={styles.wrapMenu}>
                    <Grid
                        item
                        xs={7}
                        className={[styles.Menucontent, styles.MenuCoffee].join(
                            " "
                        )}
                    >
                        <Typography variant="h3">
                            <Link to="">cà phê</Link>
                        </Typography>
                        <Typography
                            variant="body1"
                            className={styles.MenuParagrap}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp;
                            Arabica thượng hạng được trồng trên những vùng cao
                            nguyên Việt Nam màu mỡ, qua những bí quyết rang xay
                            độc đáo, Highlands Coffee chúng tôi tự hào giới
                            thiệu những dòng sản phẩm Cà phê mang hương vị đậm
                            đà và tinh tế.
                        </Typography>

                        <span
                            className={styles.wrapLink}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0"
                        >
                            <Link to="/ca-phe.html">khám phá thêm</Link>
                        </span>
                    </Grid>

                    <Grid item xs={5} className={styles.Menumedia}>
                        <img src={caphe} alt="imgCaPhe" />
                    </Grid>
                </Grid>

                <Grid container className={[styles.freezeMenu].join("")}>
                    <Grid item xs={5} className={[styles.freeze].join("")}>
                        <img src={freeze} alt="imgfreeze" />
                    </Grid>

                    <Grid
                        item
                        xs={7}
                        className={[styles.Menucontent, styles.MenuCoffee].join(
                            " "
                        )}
                    >
                        <Typography variant="h3">
                            <Link to="">freeze</Link>
                        </Typography>
                        <Typography
                            variant="body1"
                            className={[styles.freezeParagrap].join("")}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Sảng khoái với thức uống đá xay phong cách Việt.
                            Freeze là thức uống đá xay mát lạnh được pha chế từ
                            những nguyên liệu thuần túy của Việt Nam.
                        </Typography>

                        <span
                            className={styles.wrapLink}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0"
                        >
                            <Link to="/freeze.html">khám phá thêm</Link>
                        </span>
                    </Grid>
                </Grid>

                <Grid container className={[styles.tea].join("")}>
                    <Grid item xs={7} className={[styles.MenuTea].join()}>
                        <Typography variant="h3" className={styles.titleTea}>
                            <Link to="">trà</Link>
                        </Typography>
                        <Typography
                            variant="body1"
                            className={styles.MenuParagrap}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Hương vị tự nhiên, thơm ngon của Trà Việt
                            với&nbsp;phong cách hiện đại tại&nbsp;Highlands
                            Coffee sẽ giúp bạn gợi mở vị giác của bản thân và
                            tận hưởng một cảm giác thật khoan khoái, tươi mới.
                        </Typography>

                        <span
                            className={styles.wrapLink}
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0"
                        >
                            <Link to="/tea.html">khám phá thêm</Link>
                        </span>
                    </Grid>

                    <Grid
                        item
                        xs={5}
                        className={[styles.Menumedia, styles.TeaMedia].join("")}
                    >
                        <img src={Tea} alt="imgtea" />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}

export default MenuList;
