import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav >
                <div>
                        <ul>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/">
                                    Главная
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/catalog" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/catalog">
                                    Каталог
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/about" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/about">
                                    О нас
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/delivery" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/delivery">
                                    Доставка
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/contact" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/contact">
                                    Контакты
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/cart" ? "active" : ""
                                }`}
                            >
                                <Link className="nav-link" to="/cart">
                                    Корзина
                                </Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);