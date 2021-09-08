import React from "react";
import PageTop from "../components/PageTop";
import CatalogueBlock from "../components/CatalogueBlock";

const Catalogue = () => {

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