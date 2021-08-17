import React from "react";
import { Link } from "react-router-dom";

const Catalogue = () => {
    const productsData = [
        {
            id: "1",
            name: "Grumpy Cat Poster",
            description: "Everyone's favorite cat who loves to hate",
            price: 15
        },
        {
            id: "2",
            name: "Stretch Armstrong",
            description:
                "He bends! He stretches! He even ties in knots, but always returns to his original shape!",
            price: 20
        },
        {
            id: "3",
            name: "Hungry Hungry Hippos Game",
            description:
                "It's a race, it's a chase, hurry up and feed their face! Who will win? No one knows! Feed the hungry hip-ip-pos!",
            price: 30
        },
        {
            id: "4",
            name: "Crossfire board game",
            description: "You'll get caught up in the crossfire!",
            price: 35
        },
        {
            id: "1",
            name: "Grumpy Cat Poster",
            description: "Everyone's favorite cat who loves to hate",
            price: 15
        },
        {
            id: "2",
            name: "Stretch Armstrong",
            description:
                "He bends! He stretches! He even ties in knots, but always returns to his original shape!",
            price: 20
        },
        {
            id: "3",
            name: "Hungry Hungry Hippos Game",
            description:
                "It's a race, it's a chase, hurry up and feed their face! Who will win? No one knows! Feed the hungry hip-ip-pos!",
            price: 30
        },
        {
            id: "4",
            name: "Crossfire board game",
            description: "You'll get caught up in the crossfire!",
            price: 35
        }
    ]


    const products = productsData.map(product => {
        return (

            <div key={product.id}className="col-sm col-md-6 col-lg-3 ">
                <div className="product">
                    <Link className="img-prod"
                          to={`/catalog/${product.id}`}>
                        {product.name}
                        <img className="img-fluid"
                             src="images/product-1.jpg"
                             alt="Colorlib Template"/>
                    </Link>
                    <div className="text py-3 px-3">
                        <h3><a href="#">Young Woman Wearing Dress</a></h3>
                        <div className="d-flex">
                            <div className="pricing">
                                <p className="price"><span className="mr-2 price-dc">$120.00</span><span
                                    className="price-sale">{product.price}</span></p>
                            </div>
                        </div>
                        <hr/>
                        <p className="bottom-area d-flex">
                            <a href="#" className="add-to-cart"><span>Add to cart <i
                                className="ion-ios-add ml-1"></i></span></a>
                            <a href="#" className="ml-auto"><span><i
                                className="ion-ios-heart-empty"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="contact">
            <div>
                <div className="hero-wrap hero-bread hero-rasp-catalog">
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9 text-center">
                                <h1 className="mb-0 bread">Каталог</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section bg-light">
                    <div className="container-fluid">
                        <div className="row">
                            {products}
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Catalogue;