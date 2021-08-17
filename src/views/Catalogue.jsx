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
        }
    ]


    const products = productsData.map(product => {
        return (
            <div key={product.id}>
                <h3>
                    <Link to={`/catalog/${product.id}`}>{product.name}</Link>
                </h3>
                <p>Price: ${product.price}</p>
                <hr />
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
                <div>
                    {products}
                </div>

            </div>
        </div>
    );
}

export default Catalogue;