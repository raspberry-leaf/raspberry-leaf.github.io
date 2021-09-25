import React, {useContext} from "react";
import Context from "../Context";
import {makeStyles} from "@material-ui/core/styles";
import ScrollToTop from "./ScrollToTop";

const useStyles = makeStyles((theme) => ({
    list: {
        '& li': {
            margin: "0 5px",
            cursor: "pointer"
        }
    }
}));

const Pagination = (props) => {
    const {data, rates, desc} = useContext(Context);
    const classes = useStyles();
    const {catalogItems, pagination, setPagination, setCatalogItems} = props;

    const handleClick = (page) => {
        const data = [...catalogItems];
        data.map((el, i) => {
            el.show = i >= page*pagination.count && i < (page + 1)*pagination.count;
            return el;
        });

        ScrollToTop();
        setCatalogItems(data);
        setPagination(prevState=>({...prevState,
            current: page
        }));
    }

    return (

        <div className="row mt-5">
            <div className="col text-center">
                <div className="block-27">
                    <ul className={classes.list}>
                        {pagination.array.map((el,i) => {
                            const string = i === pagination.current
                                        ? <li key={i} className="active"><span>{el + 1}</span></li>
                                        : <li key={i}><a onClick={() => handleClick(el)}>{el + 1}</a></li>
                            return string;
                        })}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Pagination;