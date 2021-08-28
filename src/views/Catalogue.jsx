import React, {useContext, useState} from "react";
import muslinTwo_yg from "../img/catalog/muslinTwo_yg";
import muslinTwo_rg from "../img/catalog/muslinTwo_rg";
import base_rose from "../img/catalog/base_rose";
import base_lemon from "../img/catalog/base_lemon";
import CatalogueCard from "../components/CatalogueCard";
import Context from "../Context";
import PageTop from "../components/PageTop";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const Catalogue = () => {
    const {data, rates, desc} = useContext(Context);

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
        }
    ];

    const randomArray = (arr) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled;
    }

    const getCatalogItems = () => {
        const newArr = [];

        data.map(items => {

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
                    show: i <= 7,
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

console.log(pagination)
    return (
        <div className="contact">
            <div>
                <PageTop title={"Каталог"}
                         imageName={"catalog"}/>
                <section className="ftco-section bg-light">

                    <div className="container-fluid">
                        <Filter catalogItems={catalogItems}
                                randomArray={randomArray}
                                pagination={pagination}
                                setPagination={setPagination}
                                setCatalogItems={setCatalogItems}/>
                        <div className="row">
                            {catalogItems.map((elem,i) => {
                                if (elem.show && elem.showRate) {
                                    return <CatalogueCard key={i}
                                                          postCard={rates.postcard}
                                                          elem={elem}/>
                                }
                            })}
                        </div>
                        <Pagination pagination={pagination}
                                    setPagination={setPagination}
                                    catalogItems={catalogItems}
                                    setCatalogItems={setCatalogItems}/>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Catalogue;