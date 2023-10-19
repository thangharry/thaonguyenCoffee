import React from "react";
import { Link, useParams } from "react-router-dom";
import { coffeeProduct } from "./Bingsu";
import styles from "./Detail.module.scss";

import { Button, Container, Typography } from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
import { useCart } from "./context/Shop_context";

function DetailBingsu({ match }) {
    const { addtocart } = useCart();

    const { id } = useParams();
    const product = coffeeProduct.find((p) => p.id === parseInt(id));

    // toastify
    const notify = () =>
        toast.success(`Bạn đã chọn sản phẩm ${product.name} thành công!`);

    return (
        <div>
            <Container>
                <h2 className={styles.titlelistCoffee}>{product.name}</h2>
                <div className={styles.desclistCoffee}>
                    <img src={product.img} alt="" className={styles.thumb} />
                    <div className={styles.content}>
                        <span>
                            <Typography variant="body1" className={styles.text}>
                                {product.content}
                            </Typography>
                        </span>

                        <Button
                            onClick={() => {
                                notify();
                                addtocart(product);
                            }}
                        >
                            <Link to="/gio-hang.html">đặt mua ngay</Link>
                        </Button>

                        <span className={styles.size}>
                            <p>Size: </p>
                            <button>S</button>
                        </span>

                        <span className={styles.price}>
                            <p>Giá: </p>
                            <b>{product.price},000 VNĐ</b>
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default DetailBingsu;
