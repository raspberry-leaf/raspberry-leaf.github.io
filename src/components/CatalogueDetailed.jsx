import React, {useContext, useEffect, useState} from "react";
import Context from "../Context";
import present from "../img/img_present.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
import PopularItems from "./PopularItems";
import PostcardTick from "./PostcardTick";
import {Link} from "react-router-dom";
SwiperCore.use([Pagination]);

const CatalogueDetailed = () => {
    const {state, setState} = useContext(Context);
    const [checked, setChecked] = useState(false);
    const [inCart, setInCart] = useState(false);

    const checkGift = () => {
        if(checkElemInCart()){
            const currentElem = state.cart.find(el => el.item.id === state.currentItem.id)
            setChecked(currentElem.gift)
            setInCart(true);
        }
    }
    useEffect(checkGift,[])

    const handleCart = () => {
        let data = [...state.cart];

        if (data.find(el => el.item.id === state.currentItem.id)) {
            data = data.filter(el => el.item.id !== state.currentItem.id)
            setInCart(false);
            setChecked(false);
        } else {
            data.push({item: state.currentItem, gift: checked})
            setInCart(true);
        }
        setState(prevState=>({...prevState, cart: data}));
    }

    const checkElemInCart = () => {
        return state.cart.find(el => el.item.id === state.currentItem.id) !== undefined;
    }

    return (
        <>
        <section className="ftco-section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mb-5 ">
                        <Swiper
                            className="img-fluid"
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{clickable: true}}
                            scrollbar={{draggable: true}}
                            loop={true}
                        >
                            <SwiperSlide><img className="img-fluid"
                                              src={state.currentItem.noPostcard}
                                              alt={state.currentItem.name}/></SwiperSlide>
                            <SwiperSlide><img className="img-fluid"
                                              src={state.currentItem.withPostcard}
                                              alt={state.currentItem.name}/></SwiperSlide>
                            <SwiperSlide><img className="img-fluid"
                                              src={present}
                                              alt={state.currentItem.name}/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-7 product-details pl-md-5">
                        <h3>{state.currentItem.shortName}</h3>
                        <h4>({state.currentItem.shortDesc})</h4>
                        {state.currentItem.desc && <p dangerouslySetInnerHTML={{__html: `${state.currentItem.desc}`}}></p>}
                        {state.currentItem.itemsDesc && <p dangerouslySetInnerHTML={{__html: `${state.currentItem.itemsDesc}`}}></p>}
                        {state.currentItem.descPresent && <p dangerouslySetInnerHTML={{__html: `${state.currentItem.descPresent}`}}></p>}
                        <p>Включена <strong>бесплатная доставка</strong> набора по всей России. <br/>
                        Основная компания, которая осуществляет доставку в рамках предложения, - Почта России. <br/>
                        Если вам хотелось бы получить набор другой почтовой компанией, то об этом необходимо сообщить заранее. В таком случае возможна небольшая доплата в зависимости от выбранной компании и услуги.</p>
                        <div className="mt-2">
                            <PostcardTick elem={state.currentItem}
                                          checked={checked}
                                          setChecked={setChecked}/>
                        </div>
                        <div className="mt-2">
                            {inCart
                                ? <>
                                    <button className="btn btn-primary py-3 px-4 w-100 btn-local btn-left added" onClick={handleCart}>
                                        <span>Уже в корзинe <i className="ion-ios-add ml-1"></i></span>
                                    </button>
                                    <Link className="nav-link nav-link_center" to="/cart" className="toCart">
                                    Перейти в корзину
                                    </Link>
                                    </>
                                :  <button onClick={handleCart} className="btn btn-primary py-3 px-4 w-100 btn-local btn-left">
                                    В корзину
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PopularItems/>
        </>
    );
}

export default CatalogueDetailed;