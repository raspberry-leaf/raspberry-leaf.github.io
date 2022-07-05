import React, {useEffect} from "react";
import PageTop from "../components/PageTop";
import CatalogueBlock from "../components/CatalogueBlock";
import ScrollToTop from "../components/ScrollToTop";

const Catalogue = () => {

    //useEffect(() => ScrollToTop(),[])

    return (
        <div className="contact">
            <div>
                <PageTop title={"Каталог"}
                         imageName={"catalog"}/>
                <div className="container">
                    <div className="row">
                        <div className="p-3">
                    <p>Наборы можно заказать как для себя, так и <strong>в подарок</strong> на выписку, рождение малыша или крестины, добавив подарочную упаковку при выборе.<br/>
                        Каждый комплект доставляется <strong>бесплатно</strong> по всей России.</p>
                </div></div></div>
                <CatalogueBlock/>
            </div>
        </div>
    );
}

export default Catalogue;