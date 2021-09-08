import React from "react";
import PageTop from "../components/PageTop";
import CartForm from "../components/CartForm";
import PopularItems from "../components/PopularItems";

const Cart = () => {

    return (
        <div className="cart">
            <PageTop title={"Корзина"}
                     imageName={"cart"}/>
            <div className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-12 ">
                            <div className="cart-list">
                                <table className="table">
                                    <thead className="thead-primary">
                                    <tr className="text-center">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Наименование</th>
                                        <th>Цена</th>
                                        <th>Итого</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="text-center">
                                        <td className="product-remove"><span
                                            className="ion-ios-close">x</span></td>

                                        <td className="image-prod">
                                            Image
                                        </td>

                                        <td className="product-name">
                                            <h3>Young Woman Wearing Dress</h3>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                        </td>

                                        <td className="price">$4.90</td>

                                        <td className="total">$4.90</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <CartForm/>
                </div>
            </div>
            <iframe name="dummyframe" id="dummyframe"></iframe>
            <PopularItems/>
        </div>
    );
}

export default Cart;