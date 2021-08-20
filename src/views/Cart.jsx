import React from "react";
import PageTop from "../components/PageTop";

const Cart = () => {
    function handleSubmit() {
        console.log(444)
    }

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
                    <div className="row mt-5 pt-2 d-flex">
                        <div className="col-md-8">
                            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScvd7K0Gg1GOIz_t3DIsh9DQGDHdfF38Ux1P0TOr7FE5g9bVA/formResponse"
                                  className="billing-form bg-light p-3 p-md-5" target="dummyframe" onSubmit={handleSubmit}>
                                <h3 className="mb-4 billing-heading">Оформить заказ</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-6 display-hidden">
                                        <div className="form-group">
                                            <label>Наименование товара</label>
                                            <input type="text" className="form-control" name="entry.1449321021" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 display-hidden">
                                        <div className="form-group">
                                            <label>Артикул</label>
                                            <input type="text" name="entry.1337168616" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 display-hidden">
                                        <div className="form-group">
                                            <label>Цена</label>
                                            <input type="text" name="entry.1054069143" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <p className="col-md-12 mb-3"><span className="formSubTitle">Куда отправить подтверждение заказа?</span></p>
                                    <div className="w-100"></div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <div className="radio">
                                                <label htmlFor="WhatsApp" className="mr-3">
                                                    <input type="radio"
                                                           id="WhatsApp"
                                                           value={"WhatsApp"}
                                                           required
                                                           name="entry.731680607"/> WhatsApp</label>
                                                <label htmlFor="Instagram" className="mr-3">
                                                    <input type="radio"
                                                           id="Instagram"
                                                           required
                                                           value={"Instagram"}
                                                           name="entry.731680607"/> Instagram</label>
                                                <label htmlFor="Telegram" className="mr-3">
                                                    <input type="radio"
                                                           id="Telegram"
                                                           required
                                                           value={"Telegram"}
                                                           name="entry.731680607"/> Telegram</label>
                                                <label  htmlFor="Email" className="mr-3">
                                                    <input type="radio"
                                                           id="Email"
                                                           required
                                                           value={"Email"}
                                                           name="entry.731680607"/> По электронной почте</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <label>Данные для связи</label>
                                            <input type="text" name="entry.1161355389" required className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <p className="col-md-12"><span className="formSubTitle">Данные для почтовой отправки</span></p>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Фамилия, имя, отчество</label>
                                            <input type="text" required name="entry.1142994660" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Телефон</label>
                                            <input type="text" required name="entry.1482676785" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Населённый пункт</label>
                                            <input type="text" required name="entry.1508468886" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Почтовый индекс</label>
                                            <input type="text" required name="entry.1145848347" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Адрес</label>
                                            <input type="text" required name="entry.1622111991" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-12">
                                        <div className="form-group d-flex flex-column">
                                            <label>Комментарий к заказу</label>
                                            <textarea name="entry.363955861" cols="10" rows="5"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-auto"><button type="submit" className="btn btn-primary py-3 px-4 w-100">Отправить</button></div>
                                </div>

                            </form>



                        </div>
                        <div className="col-md-4 marginAuto">
                            <div className="cart-detail cart-total bg-light p-3 p-md-4">
                                <h3 className="billing-heading mb-4">Итого</h3>
                                <p className="d-flex">
                                    <span>Товары</span>
                                    <span>$20.60</span>
                                </p>
                                <p className="d-flex">
                                    <span>Доставка</span>
                                    <span>Бесплатно</span>
                                </p>
                                <hr/>
                                <p className="d-flex total-price">
                                    <span>Итого</span>
                                    <span>$17.60</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <iframe name="dummyframe" id="dummyframe"></iframe>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center">
                            <h1 className="big">Наборы</h1>
                            <h2 className="mb-4">Популярные</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg">
                            <div className="product">
                                <a className="img-prod"><img className="img-fluid" src=""
                                                                      alt="Colorlib Template"/></a>
                                <div className="text py-3 px-3">
                                    <h3><a >Young Woman Wearing Dress</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price"><span>$120.00</span></p>
                                        </div>
                                        <div className="rating">
                                            <p className="text-right">
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr/>
                                        <p className="bottom-area d-flex">
                                            <a  className="add-to-cart"><span>Add to cart <i
                                                className="ion-ios-add ml-1"></i></span></a>
                                            <a  className="ml-auto"><span><i
                                                className="ion-ios-heart-empty"></i></span></a>
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg">
                            <div className="product">
                                <a  className="img-prod"><img className="img-fluid" src=""
                                                                      alt="Colorlib Template"/></a>
                                <div className="text py-3 px-3">
                                    <h3><a >Young Woman Wearing Dress</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price"><span>$120.00</span></p>
                                        </div>
                                        <div className="rating">
                                            <p className="text-right">
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr/>
                                        <p className="bottom-area d-flex">
                                            <a  className="add-to-cart"><span>Add to cart <i
                                                className="ion-ios-add ml-1"></i></span></a>
                                            <a  className="ml-auto"><span><i
                                                className="ion-ios-heart-empty"></i></span></a>
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg">
                            <div className="product">
                                <a  className="img-prod"><img className="img-fluid" src=""
                                                                      alt="Colorlib Template"/></a>
                                <div className="text py-3 px-3">
                                    <h3><a >Young Woman Wearing Dress</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price"><span>$120.00</span></p>
                                        </div>
                                        <div className="rating">
                                            <p className="text-right">
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr/>
                                        <p className="bottom-area d-flex">
                                            <a  className="add-to-cart"><span>Add to cart <i
                                                className="ion-ios-add ml-1"></i></span></a>
                                            <a  className="ml-auto"><span><i
                                                className="ion-ios-heart-empty"></i></span></a>
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg">
                            <div className="product">
                                <a  className="img-prod"><img className="img-fluid" src=""
                                                                      alt="Colorlib Template"/></a>
                                <div className="text py-3 px-3">
                                    <h3><a >Young Woman Wearing Dress</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price"><span>$120.00</span></p>
                                        </div>
                                        <div className="rating">
                                            <p className="text-right">
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                                <span className="ion-ios-star-outline"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr/>
                                        <p className="bottom-area d-flex">
                                            <a  className="add-to-cart"><span>Add to cart <i
                                                className="ion-ios-add ml-1"></i></span></a>
                                            <a  className="ml-auto"><span><i
                                                className="ion-ios-heart-empty"></i></span></a>
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart;