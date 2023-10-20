import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Hethongcuahang from "./pages/Hethongcuahang";

import Coffee from "./pages/Coffee";

import Detail from "./pages/Detail";

import Trasua from "./pages/Trasua";
import DetailTrasua from "./pages/DetailTrasua";
import Suachua from "./pages/Suachua";
import DetailSuachua from "./pages/DetailSuachua";
import Daxaykem from "./pages/Daxaykem";
import Bingsu from "./pages/Bingsu";
import DetailBingsu from "./pages/DetailBingsu";
import Giohang from "./pages/Giohang";
import DetailDaxaykem from "./pages/DetailDaxaykem";
import Tratraicay from "./pages/Tratraicay";
import DetailTratraicay from "./pages/DetailTratraicay";
import Sinhto from "./pages/Sinhto";
import DetailSinhto from "./pages/DetailSinhto";
import Nuocep from "./pages/Nuocep";
import DetailNuocep from "./pages/DetailNuocep";
import Soda from "./pages/Soda";
import DetailSoda from "./pages/DetailSoda";
import Monkhac from "./pages/Monkhac";
import DetailMonkhac from "./pages/DetailMonkhac";
import { CartProvider } from "./pages/context/Shop_context";
import Lienhe from "./pages/Lienhe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider>
                {/* <ShopContext> */}
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route
                            path="he-thong-cua-hang"
                            element={<Hethongcuahang />}
                        />
                        <Route path="ca-phe.html" element={<Coffee />} />

                        <Route path="ca-phe.html/:id" element={<Detail />} />

                        <Route path="tra-sua.html" element={<Trasua />} />

                        <Route
                            path="tra-sua.html/:id"
                            element={<DetailTrasua />}
                        />

                        <Route path="sua-chua.html" element={<Suachua />} />

                        <Route path="da-xay-kem.html" element={<Daxaykem />} />

                        <Route
                            path="da-xay-kem.html/:id"
                            element={<DetailDaxaykem />}
                        />

                        <Route
                            path="sua-chua.html/:id"
                            element={<DetailSuachua />}
                        />

                        <Route path="bingsu.html" element={<Bingsu />} />

                        <Route
                            path="bingsu.html/:id"
                            element={<DetailBingsu />}
                        />

                        <Route
                            path="tra-trai-cay.html"
                            element={<Tratraicay />}
                        />

                        <Route
                            path="tra-trai-cay.html/:id"
                            element={<DetailTratraicay />}
                        />

                        <Route path="sinh-to.html" element={<Sinhto />} />

                        <Route
                            path="sinh-to.html/:id"
                            element={<DetailSinhto />}
                        />

                        <Route path="nuoc-ep.html" element={<Nuocep />} />

                        <Route
                            path="nuoc-ep.html/:id"
                            element={<DetailNuocep />}
                        />

                        <Route path="soda.html" element={<Soda />} />

                        <Route path="soda.html/:id" element={<DetailSoda />} />

                        <Route path="mon-khac.html" element={<Monkhac />} />

                        <Route
                            path="mon-khac.html/:id"
                            element={<DetailMonkhac />}
                        />

                        <Route path="gio-hang.html" element={<Giohang />} />

                        <Route path="lien-he.html" element={<Lienhe />} />
                    </Route>
                </Routes>
                {/* </ShopContext> */}
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
