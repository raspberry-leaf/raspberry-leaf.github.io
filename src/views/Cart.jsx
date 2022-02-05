import React, {useContext, useEffect, useState} from "react";
import PageTop from "../components/PageTop";
import CartForm from "../components/CartForm";
import PopularItems from "../components/PopularItems";
import Context from "../Context";
import CartTable from "../components/CartTable";
import ScrollToTop from "../components/ScrollToTop";

const Cart = () => {
    const {state, rates} = useContext(Context);
    useEffect(() => ScrollToTop(),[])

    const [currentRate, setCurrentRate] = useState(0);
    const [promoRate, setPromoRate] = useState(0);

    const totalRate = (promo) => {
        let rate = 0;
        state.cart.map(elem => {
            const total = elem.item.rate + (elem.gift ? rates.postcard.rate : 0);
            rate = rate + total;
        })
        setCurrentRate(rate);
        if (promo) {
            rate = Math.round(parseInt(rate)/100*95);
        }
        setPromoRate(rate);
    }

    return (
        <div className="cart">
            <PageTop title={"Корзина"}
                     imageName={"cart"}/>
            <div className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-12 ">
                            {state.cart.length > 0
                                ? <CartTable currentRate={currentRate} promoRate={promoRate} totalRate={totalRate}/>
                                : <p>Корзина пока пуста :(</p>
                            }
                        </div>
                    </div>
                    {state.cart.length > 0 && <CartForm totalRate={currentRate === promoRate ? currentRate : promoRate}/>}
                </div>
            </div>
            <iframe name="dummyframe" id="dummyframe"></iframe>
            <PopularItems/>
        </div>
    );
}

export default Cart;