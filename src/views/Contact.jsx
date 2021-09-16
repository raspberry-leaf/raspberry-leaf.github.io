import React from "react";
import PageTop from "../components/PageTop";

const Contact = () => {
    return (
        <div className="contact">
            <PageTop title={"Контакты"}
                     imageName={"contacts"}/>
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md py-5 wrap-about pb-md-5 ">
                            <div className="pb-md-5">
                                <p style={{textAlign: "center"}}>
                                    Если появились вопросы, то с нами всегда можно связаться в Instagram или оформив заказ на сайте.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;