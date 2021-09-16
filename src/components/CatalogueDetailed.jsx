import React, {useContext} from "react";
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
import Context from "../Context";
SwiperCore.use([Pagination]);

const CatalogueDetailed = () => {
    const {state} = useContext(Context);

    return (
        <div className="col-sm col-md-6 col-lg-3">
            <div className="product">
                    {state.currentItem.name}
            </div>
        </div>
    );
}

export default CatalogueDetailed;