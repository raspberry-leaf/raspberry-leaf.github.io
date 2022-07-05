import React, {useContext, useEffect, useState} from "react";
import present from "../img/img_present.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
import Context from "../Context";
import ScrollToTop from "./ScrollToTop";
import PostcardTick from "./PostcardTick";
SwiperCore.use([Pagination]);

const CatalogueCard = (props) => {
    const [checked, setChecked] = useState(false);
    const {elem, postCard, popular} = props;
    const {state, setState} = useContext(Context);
    const {catalogItems} = state;

    const checkGift = () => {
        if(checkElemInCart()){
            const currentElem = state.cart.find(el => el.item.id === elem.id)
            setChecked(currentElem.gift)
        }
    }
    useEffect(checkGift,[])

    const handleItem = () => {
        ScrollToTop();
        setState(prevState=>({...prevState, currentItem: catalogItems.find(el => el.id === elem.id)}));
    }

    const handleCart = () => {
        let data = [...state.cart];

        if (data.find(el => el.item.id === elem.id)) {
            data = data.filter(el => el.item.id !== elem.id)
        } else {
            data.push({item: elem, gift: checked || (popular ? popular : false)})
        }
        setState(prevState=>({...prevState, cart: data}));
    }

    const checkElemInCart = () => {
        return state.cart.find(el => el.item.id === elem.id) !== undefined;
    }

    return (
        <div key={elem.id} className={popular ? "col-lg" : "col-sm col-md-6 col-lg-3"}>
            <div className="product">
                <Link className="img-prod"
                      onClick={handleItem}
                      to={`/catalog/${elem.id}`}>
                    {popular
                        ? <img className="img-fluid"
                               src={elem.withPostcard}
                               alt={elem.name}/>
                        : <Swiper
                            className="img-fluid"
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{clickable: true}}
                            scrollbar={{draggable: true}}
                            loop={true}
                        >
                            <SwiperSlide><img className="img-fluid"
                                              src={elem.noPostcard}
                                              alt={elem.name}/></SwiperSlide>
                            <SwiperSlide><img className="img-fluid"
                                              src={elem.withPostcard}
                                              alt={elem.name}/></SwiperSlide>
                            <SwiperSlide><img className="img-fluid"
                                              src={present}
                                              alt={elem.name}/></SwiperSlide>
                        </Swiper>
                    }
                </Link>
                <div className="text py-3 px-3">
                    <h3 className="catalogName"><a href="#">{elem.name}</a></h3>
                    {popular
                        ?  <div className="d-flex position-relative">
                            <div className="pricing">
                                <p className="price"><span className="price-sale">
                                    {elem.rate + postCard.rate} руб</span></p>
                            </div>
                            <div className="freeDelivery">Бесплатная доставка</div>
                         </div>
                        : <PostcardTick elem={elem}
                                        checked={checked}
                                        setChecked={setChecked}/>
                    }

                    <hr/>
                    <p className={checkElemInCart() ? "bottom-area" : "bottom-area d-flex align-items-center" }>
                        {checkElemInCart()
                            ? <>
                            <button className="add-to-cart added" onClick={handleCart}><span>Уже в корзинe <i
                                className="ion-ios-add ml-1"></i></span></button>
                                <Link className="nav-link nav-link_center" to="/cart" className="toCart">
                                    Перейти в корзину
                                </Link>
                            </>
                            :  <button className="add-to-cart" onClick={handleCart}><span>В корзину <i
                                className="ion-ios-add ml-1"></i></span></button>
                        }

                    </p>
                </div>
            </div>
        </div>


    );
}

export default CatalogueCard;