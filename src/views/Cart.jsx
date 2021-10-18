import React, {useContext, useEffect} from "react";
import PageTop from "../components/PageTop";
import CartForm from "../components/CartForm";
import PopularItems from "../components/PopularItems";
import Context from "../Context";
import CartTable from "../components/CartTable";
import ScrollToTop from "../components/ScrollToTop";

const Cart = () => {
    const {state} = useContext(Context);
    useEffect(() => ScrollToTop(),[])
    return (
        <div className="cart">
            <PageTop title={"Корзина"}
                     imageName={"cart"}/>
            <div className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-12 ">
                            {state.cart.length > 0
                                ? <CartTable/>
                                : <p>Корзина пока пуста :(</p>
                            }
                        </div>
                    </div>
                    {state.cart.length > 0 && <CartForm/>}
                </div>
            </div>
            <iframe name="dummyframe" id="dummyframe"></iframe>
            <PopularItems/>
        </div>
    );
}

export default Cart;