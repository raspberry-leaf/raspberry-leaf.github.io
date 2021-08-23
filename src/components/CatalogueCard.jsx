import React, {useState} from "react";
import present from "../img/img_present.jpg";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

const CustomCheckbox = withStyles({
    root: {
        color: "rgba(241, 184, 196, 0.5)",
        '&$checked': {
            color: "#ffa0af",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CatalogueCard = (props) => {
    const [checked, setChecked] = useState(false);
    const {elem,postCard} = props;

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
                        <SwiperSlide><img className="img-fluid"
                                          src={present}
                                          alt={elem.name}/></SwiperSlide>
                    </Swiper>
                </Link>
                <div className="text py-3 px-3">
                    <h3 className="catalogName"><a href="#">{elem.name}</a></h3>
                    <FormControlLabel
                        control={<CustomCheckbox checked={checked} onChange={() => setChecked(!checked)} name="checkbox" />}
                        label={postCard.name}
                    />
                    <div className="d-flex">
                        <div className="pricing">
                            <p className="price"><span className="price-sale">
                                {checked ? `${elem.rate + postCard.rate}` : elem.rate} руб</span></p>
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


    );
}

export default CatalogueCard;