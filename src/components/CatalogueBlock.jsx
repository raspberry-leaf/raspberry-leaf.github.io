import React, {useContext, useState} from "react";
import muslinTwo_yg from "../img/catalog/muslinTwo_yg";
import muslinTwo_rg from "../img/catalog/muslinTwo_rg";
import base_rose from "../img/catalog/base_rose";
import base_green from "../img/catalog/base_green";
import base_lemon from "../img/catalog/base_lemon";
import base_grey from "../img/catalog/base_grey";
import baseCotton_flowers from "../img/catalog/baseCotton_flowers";
import baseCotton_cotton from "../img/catalog/baseCotton_cotton";
import blanket_beige from "../img/catalog/blanket_beige";
import blanket_grey from "../img/catalog/blanket_grey";
import CatalogueCard from "../components/CatalogueCard";
import Context from "../Context";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const CatalogueBlock = () => {
    const {data, rates} = useContext(Context);

    const imagesArr = [
        {
            imgTitle: "muslinTwo_yg",
            array: muslinTwo_yg
        },
        {
            imgTitle: "muslinTwo_rg",
            array: muslinTwo_rg
        },
        {
            imgTitle: "base_rose",
            array: base_rose
        },
        {
            imgTitle: "base_lemon",
            array: base_lemon
        },
        {
            imgTitle: "base_green",
            array: base_green
        },
        {
            imgTitle: "base_grey",
            array: base_grey
        },
        {
            imgTitle: "baseCotton_flowers",
            array: baseCotton_flowers
        },
        {
            imgTitle: "baseCotton_cotton",
            array: baseCotton_cotton
        },
        {
            imgTitle: "blanket_beige",
            array: blanket_beige
        },
        {
            imgTitle: "blanket_grey",
            array: blanket_grey
        }
    ];

    const randomArray = (arr) => {
        return arr.sort(() => 0.5 - Math.random());
    }

    const getCatalogItems = () => {
        const newArr = [];

        data.map((items,j) => {

            items.items.map((elem, i) => {
                const currentImageArr = imagesArr.find(el => el.imgTitle === items.name).array;
                const currentImage = currentImageArr.find(el => el.type === elem.type).noPostcard;
                const currentImagePostcard = currentImageArr.find(el => el.type === elem.type).withPostcard;
                const currentName = (`Набор ${items.color}: `).concat(rates.rates.find(el => el.type === elem.type).name);
                const currentRate = rates.rates.find(el => el.type === elem.type).rate;

                newArr.push({
                    id: elem.id,
                    type: elem.type,
                    name: currentName,
                    rate: currentRate,
                    noPostcard: currentImage,
                    withPostcard: currentImagePostcard,
                    show: j === 0,
                    showRate: true
                })
                return elem;
            })
        })

        return randomArray(newArr);
    }
    const [catalogItems, setCatalogItems] = useState(() => getCatalogItems());
    const [pagination, setPagination] = useState({
        current: 0,
        count: 8,
        array: Array.from(Array(Math.ceil(catalogItems.length/8)).keys())
    })

    return (
        <section className="ftco-section bg-light">
            <div className="container-fluid">
                <Filter catalogItems={catalogItems}
                        randomArray={randomArray}
                        pagination={pagination}
                        setPagination={setPagination}
                        setCatalogItems={setCatalogItems}/>
                <div className="row">
                    {catalogItems.filter(elem => elem.show && elem.showRate).length > 0 &&
                        catalogItems.map((elem,i) => {
                        if (elem.show && elem.showRate) {
                            return <CatalogueCard key={i}
                                                  catalogItems={catalogItems}
                                                  postCard={rates.postcard}
                                                  elem={elem}/>
                        }
                    })}
                    {catalogItems.filter(elem => elem.show && elem.showRate).length === 0 &&
                        <p>К сожалению, товаров с такими параметрами у нас нет</p>
                    }
                </div>
                <Pagination pagination={pagination}
                            setPagination={setPagination}
                            catalogItems={catalogItems}
                            setCatalogItems={setCatalogItems}/>
            </div>
     </section>

    );
}

export default CatalogueBlock;