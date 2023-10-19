import { Grid, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
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
                            12/23 Phạm văn Đồng
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>
                                <CallIcon fontSize="large" /> Số Điện Thoại:
                            </b>
                            <a href="tel:123456789">123456789</a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <b>
                                <FacebookIcon fontSize="large" /> Fanpage:
                            </b>
                            thnags.face
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Lienhe;
