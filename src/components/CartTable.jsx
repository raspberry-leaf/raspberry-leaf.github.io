import React, {useContext, useEffect, useState} from "react";
import Context from "../Context";
import {Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const CartTable = (props) => {

    const {state, rates, setState} = useContext(Context);
    const {catalogItems} = state;

    const handleItem = (elem) => {
        ScrollToTop();
        setState(prevState=>({...prevState, currentItem: catalogItems.find(el => el.id === elem.id)}));
    }


    useEffect(props.totalRate,[])

    const removeElem = (elem) => {
        let data = [...state.cart];

        if (data.find(el => el.item.id === elem.id)) {
            data = data.filter(el => el.item.id !== elem.id)
        }

        setState(prevState=>({...prevState, cart: data}));
    }

    const handlePromocode = (value) => {
        props.totalRate(value && (value.toLowerCase() === 'малина' || value.toLowerCase() === 'raspberry'))
    }

    return (
        <div className="cartList">
            <div className="table cartTable">
                <div className="thead-primary">
                <div className="text-center cartTable_header">
                    <div>&nbsp;</div>
                    <div>Наименование</div>
                    <div>Цена</div>
                    <div>&nbsp;</div>
                </div>
                </div>
                <div className="cartTable_body">
                {state.cart.map((elem,i) => {
                    const item = elem.item;
                    return <div className="text-center cartTable_bodyRow" key={i}>
                        <div className="image-prod cartImg">
                            <Link className="img-prod"
                                  onClick={() => handleItem(item)}
                                  to={`/catalog/${item.id}`}><img className="img-fluid "
                                 src={elem.gift ? item.withPostcard : item.noPostcard}
                                                                  alt={item.name}/></Link>
                        </div>
                        <div className="product-name">
                            <Link className="img-prod"
                                  onClick={() => handleItem(item)}
                                  to={`/catalog/${item.id}`}><h3>{item.shortName}</h3></Link>
                            <p>{item.shortDesc}<br/>{elem.gift && "* в подарок (открытка и подарочная упаковка)"}</p>
                        </div>

                        <div className="price cartPrice">
                            {elem.gift
                                ? item.rate + rates.postcard.rate
                                : item.rate} руб
                        </div>
                        <div className="product-remove cartDelete">
                            <button className="ion-ios-close deleteBtn" onClick={() => removeElem(item)}>Удалить</button></div>
                    </div>
                })}
                <div className="cartTable_footer">
                    <div>&nbsp;</div>
                    <div>ИТОГО к оплате (доставка по России включена)</div>
                    {props.currentRate === props.promoRate
                        ? <div className="cartTable_rate">{props.currentRate}  руб</div>
                        : <div className="cartTable_rate"><span style={{textDecoration: 'line-through', fontWeight: "400"}}>
                            {props.currentRate}</span> {props.promoRate}  руб</div>
                    }

                    <div>&nbsp;</div>
                </div>
                <div className="cartTable_footer">
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div className="cartTable_ratePromo">
                        <h6>Промокод</h6>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                   onChange={(event) => handlePromocode(event.target.value)}
                                   placeholder=""/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                </div>
                </div>
            </div>
        </div>

    );
}

export default CartTable;