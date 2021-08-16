import React from "react";
import {useParams} from "react-router-dom";

const CatalogueDetail = () => {
    const {catalogId} = useParams();
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
    ];
    const thisProduct = productsData.find(prod => prod.id === catalogId);

    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    );
}

export default CatalogueDetail;