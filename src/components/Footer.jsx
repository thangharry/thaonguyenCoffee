import { Container } from "@mui/material";
import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
function Footer(props) {
    return (
        <Container className={styles.Container} style={{ zIndex: 100 }}>
            <div className={styles.wrapFooter}>
                <div className={styles.socialfooter}>
                    <span>
                        <Link to="https://www.facebook.com/">
                            <FacebookIcon />
                        </Link>
                    </span>

                    <span>
                        <Link to="">
                            <YouTubeIcon />
                        </Link>
                    </span>

                    <span>
                        <Link to="">
                            <InstagramIcon />
                        </Link>
                    </span>
                </div>

                <div className={styles.copyright}>
                    © 2023 bản quyền thuộc về Thảo Nguyên coffee &&
                    PhuongVanThang
                </div>

                <div className={styles.emailFooter}>
                    <MailOutlineIcon />
                    <Link
                        to="https://mail.google.com/mail/u/0/#inbox"
                        target="_blank"
                    >
                        PhuongVanThang@gmail.com
                    </Link>
                </div>

                <div className={styles.phoneFooter}>
                    <LocalPhoneIcon />
                    <a href="tel:19006847">+84 1900 6847</a>
                </div>
            </div>
        </Container>
    );
}

export default Footer;
