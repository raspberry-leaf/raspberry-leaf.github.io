import React from "react";
import PageTop from "../components/PageTop";
import PopularItems from "../components/PopularItems";

const Delivery = () => {
    return (
        <div className="contact">
            <PageTop title={"Доставка"}
                     imageName={"delivery"}/>
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md py-5 wrap-about pb-md-5 ">
                            <div className="heading-section-bold mb-5 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">Raspberry <br/>Leaf <br/> <span>доставка бесплатно</span></h2>
                                </div>
                            </div>
                            <div>
                                <p>Наборы Raspberry Leaf доставляются бесплатно по всей России.</p>
                                <p>При оформлении заказа в корзине или в Instagram сообщите следующие данные:
                                    <ul>
                                        <li>ФИО</li>
                                        <li>Почтовый адрес</li>
                                        <li>Индекс</li>
                                        <li>Телефон для связи</li>
                                    </ul>
                                </p>
                                <p>Ваш заказ будет отправлен в течение 1-2 дней после полной оплаты и предоставления всей необходимой информации о получателе.</p>
                                <p>После отправки вам будет предоставлен трек-номер для отслеживания посылки.</p>
                                <p>Основная компания, которая осуществляет доставку в рамках предложения, - Почта России. </p>
                                <p>Если вам хотелось бы получить свой RaspberryBox другой почтовой компанией, то об этом необходимо сообщить заранее. В таком случае возможна небольшая доплата в зависимости от выбранной компании и услуги.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopularItems/>
        </div>
    );
}

export default Delivery;