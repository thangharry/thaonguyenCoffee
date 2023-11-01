// import { Grid, Typography } from "@mui/material";
import React from "react";
// import { Container } from "react-bootstrap";
import styles from "./Lienhe.module.scss";
import StoreIcon from "@mui/icons-material/Store";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
function Lienhe(props) {
    return (
        <div className={styles.wrapContact}>
            <h1 className={styles.contact}>thông tin liên hệ</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <b>
                                <StoreIcon fontSize="large" /> Địa chỉ:
                            </b>
                            &ensp;5 Đường Số 13, Khu Phố 5, P. Hiệp Bình Chánh,
                            Thành Phố Thủ Đức, TP. HCM
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>
                                <CallIcon fontSize="large" /> Số Điện Thoại:
                            </b>
                            <a href="tel:123456789">&ensp;0932609233</a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>
                                <FacebookIcon fontSize="large" /> Fanpage:
                            </b>
                            &ensp; thnags.face
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Lienhe;
