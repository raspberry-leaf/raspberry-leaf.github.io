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

const Main = (props) => {

    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/about" exact component={() => <About />} />
                    <Route path="/catalog" exact component={() => <Catalogue />} />
                    <Route path="/catalog/:catalogId">
                        <CatalogueDetail />
                    </Route>
                    <Route path="/delivery" exact component={() => <Delivery />} />
                    <Route path="/contact" exact component={() => <Contact />} />
                    <Route path="/contact" exact component={() => <Cart />} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default Main;