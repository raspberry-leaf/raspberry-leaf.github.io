import React, {useContext, useState} from "react";
import { Link, withRouter } from "react-router-dom";
import main from "../img/img_main.png";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Context from "../Context";

const Navigation = (props) => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const {state, setState} = useContext(Context);

    const handleLink = () => {
        setState({...state, pagination: {...state.pagination, current: 0}});
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <div className="navigation">
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2"
                id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="navbar-img" src={main}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => handleLink()}>
                        <span className="oi oi-menu"></span> Меню
                    </button>
                    <div className={`collapse navbar-collapse ${showMobileMenu ? "show" : ''}`} id="ftco-nav" >
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/" onClick={() => handleLink()}>
                                    Главная
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/catalog" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/catalog" onClick={() => handleLink()}>
                                    Каталог
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/about" onClick={() => handleLink()}>
                                    О нас
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/delivery" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/delivery" onClick={() => handleLink()}>
                                    Доставка
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/contact" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/contact" onClick={() => handleLink()}>
                                    Контакты
                                </Link>
                            </li>
                            <li
                                className={`nav-item  cta cta-colored ${
                                    props.location.pathname === "/cart" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link nav-link_center" to="/cart" onClick={() => handleLink()}>
                                    <ShoppingCartIcon/> [{state.cart.length}]
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);