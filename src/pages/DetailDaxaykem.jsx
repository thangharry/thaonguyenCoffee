import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { coffeeProduct } from "./Daxaykem";
import styles from "./DetailDaxaykem.module.scss";

import { Button, Container, Typography } from "@mui/material";

import { toast } from "react-toastify";
import { useCart } from "./context/Shop_context";

function DetailDaxaykem({ match }) {
    const { addtocart } = useCart();

    let sanpham = {
        sizes: ["s", "m"],
        prices: [
            { id: 1, prices: [40, 45] },

            { id: 2, prices: [40, 45] },

            { id: 3, prices: [40, 45] },
            { id: 4, prices: [40, 45] },
            { id: 5, prices: [40, 45] },
            { id: 6, prices: [35, 40] },
        ],
    };
    const { id } = useParams();
    const product = coffeeProduct.find((p) => p.id === parseInt(id));

    const productPrices = sanpham.prices.find((p) => p.id === product.id);

    let [setsize] = useState(sanpham.sizes[0]);
    let [price, setprice] = useState(productPrices.prices[0]);

    const handleSizeChange = (selectsize) => {
        let selectIndex = sanpham.sizes.indexOf(selectsize);

        setsize(selectsize);
        setprice(productPrices.prices[selectIndex]);
    };

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
                            {sanpham.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSizeChange(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </span>

                        <span className={styles.price}>
                            <p>Giá: </p>
                            <b>{price},000 VNĐ</b>
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default DetailDaxaykem;
