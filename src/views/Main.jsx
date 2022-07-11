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
import {useEffect, useState} from "react";
import muslinTwo_yg from "../img/catalog/muslinTwo_yg";
import muslinTwo_rg from "../img/catalog/muslinTwo_rg";
import base_rose from "../img/catalog/base_rose";
import base_lemon from "../img/catalog/base_lemon";
import base_green from "../img/catalog/base_green";
import base_grey from "../img/catalog/base_grey";
import baseCotton_flowers from "../img/catalog/baseCotton_flowers";
import baseCotton_cotton from "../img/catalog/baseCotton_cotton";
import blanket_beige from "../img/catalog/blanket_beige";
import blanket_grey from "../img/catalog/blanket_grey";
import { useHistory } from 'react-router-dom'

const Main = (props) => {
    const {data, rates, desc} = props;

    const imagesArr = [
        {
            imgTitle: "muslinTwo_yg",
            array: muslinTwo_yg
        },
        {
            imgTitle: "muslinTwo_rg",
            array: muslinTwo_rg
        },
        {
            imgTitle: "base_rose",
            array: base_rose
        },
        {
            imgTitle: "base_lemon",
            array: base_lemon
        },
        {
            imgTitle: "base_green",
            array: base_green
        },
        {
            imgTitle: "base_grey",
            array: base_grey
        },
        {
            imgTitle: "baseCotton_flowers",
            array: baseCotton_flowers
        },
        {
            imgTitle: "baseCotton_cotton",
            array: baseCotton_cotton
        },
        {
            imgTitle: "blanket_beige",
            array: blanket_beige
        },
        {
            imgTitle: "blanket_grey",
            array: blanket_grey
        }
    ];

    const randomArray = (arr) => {
        return arr.sort(() => 0.5 - Math.random());
    }

    const getCatalogItems = () => {
        const newArr = [];

        data.map((items,j) => {

            items.items.map((elem) => {
                const currentImageArr = imagesArr.find(el => el.imgTitle === items.name).array;
                const currentImage = currentImageArr.find(el => el.type === elem.type).noPostcard;
                const currentImagePostcard = currentImageArr.find(el => el.type === elem.type).withPostcard;
                const currentName = `Набор ${items.color} №${elem.number}: ${rates.rates.find(el => el.type === elem.type).name} `;
                const currentRate = rates.rates.find(el => el.type === elem.type);

                newArr.push({
                    id: elem.id,
                    type: elem.type,
                    name: currentName,
                    shortName: `Набор ${items.color} №${elem.number} `,
                    shortDesc: currentRate.name || '',
                    descPresent: currentRate.descBig ? rates.postcard.descBig : rates.postcard.descSmall,
                    desc: currentRate.desc
                        + `${currentRate.bunny ? rates.generatedDescription.bunny : ''}`
                        + `${currentRate.rattle ? rates.generatedDescription.rattle : ''}`
                        + `${currentRate.crochet ? rates.generatedDescription.crochet : ''}`
                    ,
                    itemsDesc: currentRate.itemsDesc + currentRate.itemsDescMaterial,
                    rate: currentRate.rate,
                    noPostcard: currentImage,
                    withPostcard: currentImagePostcard,
                    show: j === 0,
                    showRate: true,

                    descPost: currentRate.post
                        ? rates.generatedDescription.post
                        : ''
                })
                return elem;
            })
            return items;
        })

        return randomArray(newArr);
    }

    const initialCatalogue = getCatalogItems();

    const ratesArr = () => {
        const newArr = [];
        initialCatalogue.map(el => newArr.push(el.rate));
        return newArr;
    }

    const [state, setState] = useState({
        catalogItems: initialCatalogue,
        filter: 'popular',
        rangeRate: [Math.min( ...ratesArr()), Math.max( ...ratesArr())],
        currentRangeRate: [],
        pagination: {
            current: 0,
            count: 8,
            array:  Array.from(Array(Math.ceil(initialCatalogue.length/8)).keys())
        },
        currentItem: '',
        cart: []
    })



    return (
        <div className="App">
            <Context.Provider value={{
                data,
                rates,
                desc,
                state,
                setState
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