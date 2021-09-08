import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Catalogue from "./Catalogue";
import CatalogueDetail from "./CatalogueDetail";
import Delivery from "./Delivery";
import Cart from "./Cart";
import Context from "../Context";

const Main = (props) => {
    const {data, rates, desc} = props;

    return (
        <div className="App">
            <Context.Provider value={{
                data,
                rates,
                desc
            }}>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/about" exact component={() => <About />} />
                    <Route path="/catalog" exact component={() => <Catalogue/>} />
                    <Route path="/catalog/:catalogId">
                        <CatalogueDetail />
                    </Route>
                    <Route path="/delivery" exact component={() => <Delivery />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                    <Route path="/cart" exact component={() => <Cart />} />
                </Switch>

                <Footer />
            </Router>
            </Context.Provider>
        </div>
    );
}

export default Main;