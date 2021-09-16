import React, {useContext, useEffect} from "react";
import PageTop from "../components/PageTop";
import CatalogueDetailed from "../components/CatalogueDetailed";
import Context from "../Context";
import Catalogue from "./Catalogue";

const CatalogueDetail = () => {
    const {state} = useContext(Context);

    const toMainPage = () => {
        if(!state.currentItem.name){
            window.location.replace('/catalog')
        }
    }
    useEffect(toMainPage,[])

    return (
        <>
        {
            state.currentItem.name
                ? <div>
                    <PageTop title={"Набор"}
                             imageName={"catalog"}/>
                    <CatalogueDetailed/>
                </div>
                : <Catalogue/>
        }
        </>

    );
}

export default CatalogueDetail;