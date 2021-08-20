import React from "react";

const Filter = (props) => {
    const {catalogItems, setCatalogItems} = props;
    console.log(catalogItems, setCatalogItems)
    return (
        <div>
            Фильтр
        </div>
    );
}

export default Filter;