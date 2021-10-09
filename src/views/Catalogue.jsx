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
                <CatalogueBlock/>
            </div>
        </div>
    );
}

export default Catalogue;