import React from "react";
import ico_vk from "../img/ico_vk.png";

function Footer() {
    return (
        <footer className="ftco-footer bg-light ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Raspberry Leaf</h2>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Связаться с нами:</h2>
                            <div className="block-23 mb-3">
                                <a href="https://vk.com/raspberry__leaf"
                                   target="_blank"
                                   className="link-instagram"><span className="icon icon-instagram">
                                        <img src={ico_vk}/>
                                    </span><span
                                        className="text">@raspberry__leaf</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;