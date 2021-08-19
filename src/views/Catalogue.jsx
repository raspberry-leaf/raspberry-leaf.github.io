import React from "react";
import { Link } from "react-router-dom";
import muslinTwo_yg from "../img/catalog/muslinTwo_yg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

const Catalogue = (props) => {
    const {data, rates, desc} = props;

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

    const catalogItems = getCatalogItems();
    console.log(catalogItems)

    const products = catalogItems.map(elem => {
console.log(elem)
        return (
            <div key={elem.id}className="col-sm col-md-6 col-lg-3 ">
                <div className="product">
                    <Link className="img-prod"
                          to={`/catalog/${elem.id}`}>
                        <Swiper
                            className="img-fluid"
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            loop={true}
                        >
                            <SwiperSlide><img className="img-fluid"
                                              src={elem.noPostcard}
                                              alt={elem.name}/></SwiperSlide>
                            <SwiperSlide><img className="img-fluid"
                                              src={elem.withPostcard}
                                              alt={elem.name}/></SwiperSlide>
                        </Swiper>
                    </Link>
                    <div className="text py-3 px-3">
                        <h3 className="catalogName"><a href="#">{elem.name}</a></h3>
                        <div className="d-flex">
                            <div className="pricing">
                                <p className="price"><span className="price-sale">{elem.rate} руб</span></p>
                            </div>
                        </div>
                        <hr/>
                        <p className="bottom-area d-flex">
                            <a href="#" className="add-to-cart"><span>В корзину <i
                                className="ion-ios-add ml-1"></i></span></a>
                        </p>
                    </div>
                </div>
            </div>
        )
    })

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