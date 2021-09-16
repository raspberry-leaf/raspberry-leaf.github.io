import React from "react";
import PageTop from "../components/PageTop";
import PopularItems from "../components/PopularItems";

const Contact = () => {
    return (
        <div className="contact">
            <PageTop title={"Контакты"}
                     imageName={"contacts"}/>
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md py-5 wrap-about pb-md-5 ">
                            <div>
                                <p style={{textAlign: "center"}}>
                                    Если появились вопросы, то с нами всегда можно связаться в <a href="https://www.instagram.com/raspberry__leaf/" target="_blank">Instagram</a> или оформив заказ на сайте.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopularItems/>
        </div>
    );
}

export default Contact;