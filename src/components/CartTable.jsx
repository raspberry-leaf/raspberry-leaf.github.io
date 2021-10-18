import React, {useContext} from "react";
import Context from "../Context";
import {Link} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const CartTable = () => {
    const {state, rates, setState} = useContext(Context);
    const {catalogItems} = state;
    console.log(state)
    const handleItem = (elem) => {
        ScrollToTop();
        setState(prevState=>({...prevState, currentItem: catalogItems.find(el => el.id === elem.id)}));
    }

    const removeElem = (elem) => {
        let data = [...state.cart];

        if (data.find(el => el.item.id === elem.id)) {
            data = data.filter(el => el.item.id !== elem.id)
        }

        setState(prevState=>({...prevState, cart: data}));
    }

    const totalRate = () => {
        let rate = 0;
        state.cart.map(elem => {
            const total = elem.item.rate + (elem.gift ? rates.postcard.rate : 0);
            rate = rate + total;
        })
        return rate;
    }

    return (
        <div className="cart-list">
            <table className="table">
                <thead className="thead-primary">
                <tr className="text-center">
                    <th>&nbsp;</th>
                    <th>Наименование</th>
                    <th>Цена</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody>
                {state.cart.map((elem,i) => {
                    const item = elem.item;
                    return <tr className="text-center" key={i}>
                        <td className="image-prod cartImg">
                            <Link className="img-prod"
                                  onClick={() => handleItem(item)}
                                  to={`/catalog/${item.id}`}><img className="img-fluid "
                                 src={elem.gift ? item.withPostcard : item.noPostcard}
                                                                  alt={item.name}/></Link>
                        </td>
                        <td className="product-name">
                            <Link className="img-prod"
                                  onClick={() => handleItem(item)}
                                  to={`/catalog/${item.id}`}><h3>{item.shortName}</h3></Link>
                            <p>{item.shortDesc}<br/>{elem.gift && "* в подарок (открытка и подарочная упаковка)"}</p>
                        </td>

                        <td className="price cartPrice">
                            {elem.gift
                                ? item.rate + rates.postcard.rate
                                : item.rate} руб
                        </td>
                        <td className="product-remove cartDelete">
                            <button className="ion-ios-close deleteBtn" onClick={() => removeElem(item)}>х</button></td>
                    </tr>
                })}
                <tr>
                    <td>&nbsp;</td>
                    <td>ИТОГО к оплате (доставка по России включена)</td>
                    <td>{totalRate()}  руб</td>
                    <td>&nbsp;</td>
                </tr>
                </tbody>
            </table>
        </div>

    );
}

export default CartTable;