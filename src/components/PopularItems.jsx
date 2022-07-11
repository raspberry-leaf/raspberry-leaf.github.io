import React, {useContext} from "react";
import Header2D from "./Header2D";
import Context from "../Context";
import CatalogueCard from "./CatalogueCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
import {Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
SwiperCore.use([Pagination]);

const PopularItems = () => {
    const {state, rates, setState} = useContext(Context);
    const {catalogItems} = state;

    return (
      <section className="ftco-section bg-light">
        <Header2D forward={"Наборы"} back={"Популярные"}/>
        <div className="container-fluid mb-4">
            <div className="row">
                <Swiper
                    className="img-fluid"
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop
                    breakpoints={{
                        320: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    },
                        525: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                        1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }}
                >
                {catalogItems.map((elem,i) => {
                    if (i < 12) {
                        return <SwiperSlide key={i}>
                            <CatalogueCard popular={true}
                                           postCard={rates.postcard}
                                           elem={elem}/></SwiperSlide>
                    }
                })}
                </Swiper>
            </div>
        </div>
        <div className="col-md-6 m-auto">
            <Link className="btn btn-primary py-3 px-4 w-100 btn-local" to="/catalog" onClick={() =>
            {
                setState({...state, pagination: {...state.pagination, current: 0}});
                ScrollToTop()
            }}>
                Посмотреть ещё
            </Link>
        </div>

      </section>

    );
}

export default PopularItems;