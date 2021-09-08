import React, {useState} from "react";

const CartForm = () => {
    function handleSubmit() {
        console.log(444)
    }
    const [contact, setContact] = useState('');

    return (
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
                                               onClick={() => setContact("WhatsApp")}
                                               name="entry.731680607"/> WhatsApp</label>
                                    <label htmlFor="Instagram" className="mr-3">
                                        <input type="radio"
                                               id="Instagram"
                                               required
                                               value={"Instagram"}
                                               onClick={() => setContact("Instagram")}
                                               name="entry.731680607"/> Instagram</label>
                                    <label htmlFor="Telegram" className="mr-3">
                                        <input type="radio"
                                               id="Telegram"
                                               required
                                               value={"Telegram"}
                                               onClick={() => setContact("Telegram")}
                                               name="entry.731680607"/> Telegram</label>
                                    <label  htmlFor="Email" className="mr-3">
                                        <input type="radio"
                                               id="Email"
                                               required
                                               value={"Email"}
                                               onClick={() => setContact("Email")}
                                               name="entry.731680607"/> По электронной почте</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="form-group">
                                <label>Данные для связи {contact !== '' && `(Ваш ${contact})`}</label>
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
                        <div className="col-md-6 m-auto btn-local"><button type="submit" className="btn btn-primary py-3 px-4 w-100">Отправить</button></div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CartForm;