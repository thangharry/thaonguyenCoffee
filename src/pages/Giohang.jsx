// import React from "react";
// import styles from "./Giohang.module.scss";
// import { Container, Typography } from "@mui/material";
// import { useCart } from "./DetailTrasua";

// function Giohang(props) {
//     return (
//         <div>
//             <h1>giỏ hàng</h1>
//         </div>
//     );
// }

// export default Giohang;

import React, { useContext } from "react";

import styles from "./Giohang.module.scss";
import { Container, Grid, Typography } from "@mui/material";

import { useCart } from "./context/Shop_context";
import { Height } from "@mui/icons-material";

function Giohang(props) {
    // const { cartitem } = useContext(ShopContext);
    const { cart } = useCart();
    return (
        <div className={styles.bodycart}>
            <Container>
                <h1 className={styles.titleCart}>giỏ hàng </h1>

                <div className={styles.listShoppingCart}>
                    {cart.map((product, index) => (
                        <div key={index} className={styles.wrapProducts}>
                            <Grid
                                container
                                className={styles.wrapProducts_container}
                            >
                                <Grid item md={4} xs={6}>
                                    <h2 className={styles.cartTitleProduct}>
                                        {product.name}
                                    </h2>
                                </Grid>
                                <Grid item md={4} xs={5}>
                                    <p className={styles.cartPriceProduct}>
                                        giá sản phẩm:{" "}
                                        <b>{product.price},000đ</b>
                                    </p>
                                </Grid>
                                <Grid item md={4} className={styles.imgCard}>
                                    <img src={product.img} alt={product.name} />
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Giohang;
