import React, {useContext, useState} from "react";
import muslinTwo_yg from "../img/catalog/muslinTwo_yg";
import CatalogueCard from "../components/CatalogueCard";
import Context from "../Context";
import PageTop from "../components/PageTop";
import Filter from "../components/Filter";

const Catalogue = () => {
    const {data, rates, desc} = useContext(Context);

    const imagesArr = [
        {
            imgTitle: "muslinTwo_yg",
            array: muslinTwo_yg
        }
    ];
    const getCatalogItems = () => {
        const newArr = [];

        data.map(items => {
            // const randomArray = (arr) => {
            //     const shuffled = arr.sort(() => 0.5 - Math.random());
            //     return shuffled;
            // }
            // items.items = randomArray(items.items);

            items.items.map((elem, i) => {
                const currentImageArr = imagesArr.find(el => el.imgTitle === items.name).array;
                const currentImage = currentImageArr.find(el => el.type === elem.type).noPostcard;
                const currentImagePostcard = currentImageArr.find(el => el.type === elem.type).withPostcard;
                const currentName = (`${items.color} набор: `).concat(rates.rates.find(el => el.type === elem.type).name);
                const currentRate = rates.rates.find(el => el.type === elem.type).rate;

                newArr.push({
                    id: elem.id,
                    type: elem.type,
                    name: currentName,
                    rate: currentRate,
                    noPostcard: currentImage,
                    withPostcard: currentImagePostcard
                })
                return elem;
            })
        })

        return newArr;
    }
    const [catalogItems, setCatalogItems] = useState(() => getCatalogItems());

    return (
        <div className="contact">
            <div>
                <PageTop title={"Каталог"}
                         imageName={"catalog"}/>
                <section className="ftco-section bg-light">

                    <div className="container-fluid">
                        <div className="row">
                            <Filter catalogItems={catalogItems}
                                    setCatalogItems={setCatalogItems}/>
                        </div>
                        <div className="row">
                            {catalogItems.map((elem,i) => {
                                return <CatalogueCard key={i}
                                                      postCard={rates.postcard}
                                                      elem={elem}/>
                            })}
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