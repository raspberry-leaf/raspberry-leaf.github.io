import React, {useContext, useState} from "react";
import Header2D from "./Header2D";
import muslinTwo_yg from "../img/catalog/muslinTwo_yg";
import muslinTwo_rg from "../img/catalog/muslinTwo_rg";
import base_rose from "../img/catalog/base_rose";
import base_lemon from "../img/catalog/base_lemon";
import base_green from "../img/catalog/base_green";
import base_grey from "../img/catalog/base_grey";
import baseCotton_flowers from "../img/catalog/baseCotton_flowers";
import baseCotton_cotton from "../img/catalog/baseCotton_cotton";
import blanket_beige from "../img/catalog/blanket_beige";
import blanket_grey from "../img/catalog/blanket_grey";
import Context from "../Context";
import CatalogueCard from "./CatalogueCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
import Home from "../views/Home";
import Catalogue from "../views/Catalogue";
import {Link} from "react-router-dom";
SwiperCore.use([Pagination]);

const PopularItems = () => {
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
                    showRate: true
                })
                return elem;
            })
        })

        return randomArray(newArr);
    }
    const [catalogItems, setCatalogItems] = useState(() => getCatalogItems());

    return (
      <section className="ftco-section bg-light">
        <Header2D forward={"Наборы"} back={"Популярные"}/>
        <div className="container-fluid mb-4">
            <div className="row">
                <Swiper
                    className="img-fluid"
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                {catalogItems.map((elem,i) => {
                    if (i < 12) {
                        return <SwiperSlide key={i}><CatalogueCard popular={true}
                                              postCard={rates.postcard}
                                                                   catalogItems={catalogItems}
                                                           elem={elem}/></SwiperSlide>
                    }
                })}
                </Swiper>
            </div>
        </div>
        <div className="col-md-6 m-auto">
            <Link className="btn btn-primary py-3 px-4 w-100 btn-local" to="/catalog">
                Посмотреть ещё
            </Link>
        </div>

      </section>

    );
}

export default PopularItems;