import React, {useContext} from "react";
import CatalogueCard from "../components/CatalogueCard";
import Context from "../Context";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const CatalogueBlock = () => {
    const {state, rates} = useContext(Context);
    const {catalogItems} = state;

    return (
        <section className="ftco-section bg-light">
            <div className="container-fluid">
                <Filter/>
                <div className="row">
                    {catalogItems.filter(elem => elem.show && elem.showRate).length > 0 &&
                        catalogItems.map((elem,i) => {
                        if (elem.show && elem.showRate) {
                            return <CatalogueCard key={i}
                                                  postCard={rates.postcard}
                                                  elem={elem}/>
                        }
                    })}
                    {catalogItems.filter(elem => elem.show && elem.showRate).length === 0 &&
                        <p>К сожалению, товаров с такими параметрами у нас нет</p>
                    }
                </div>
                <Pagination/>
            </div>
     </section>

    );
}

export default CatalogueBlock;