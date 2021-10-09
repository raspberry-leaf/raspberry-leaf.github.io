import React, {useContext, useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Context from "../Context";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 195,
        marginLeft: "10px",

        ['@media(max-width: 960px)']: {
            minWidth: 0,
        }
    },
    selectEmpty: {
        '& div': {
            padding: "5px 8px",
        },

        '&:after': {
            borderColor: "#ffa0af"
        }
    },

    root: {
       minWidth: "400px",
       marginTop: "2px",

        ['@media(max-width: 960px)']: {
            minWidth: "260px",
            width: "100%"
        }
    },

    bold: {
        fontWeight: "700",
        marginBottom: "20px",
    },

    row: {
        display: "flex",

        ['@media(max-width: 960px)']: {
            flexWrap: "wrap"
        }
    },

    formGroup: {
        flexShrink: 0,
        marginRight: "20px",
        marginBottom: "20px",
    },

    customSlider: {
        color: "#ffa0af"
    }
}));

const valuetext = (value) => {
    return `${value} руб`;
}

const Filter = () => {
    const {state, setState} = useContext(Context);
    const {catalogItems, pagination} = state;
    const classes = useStyles();

    const handlePagination = (newData) => {
        newData.map((el, i) => {
            el.show = i <= 7;
            return el;
        });
        return newData;
    }

    const handleLowHighRate = (data, rate) => {
        data.sort(function(a, b) {
            return rate === "toHighRate" ? a.rate - b.rate : b.rate - a.rate;
        });
        data = data.sort(function(a, b) {
            return (a.showRate === b.showRate)? 0 : a.showRate? -1 : 1;
        });
        setState(prevState=>({...prevState, catalogItems: handlePagination(data)}));
    }

    const handlePopular = (data) => {
        let newData = [...state.catalogItems];
        newData = newData.sort(function(a, b) {
            return (a.showRate === b.showRate)? 0 : a.showRate? -1 : 1;
        });
        setState(prevState=>({...prevState, catalogItems: handlePagination(newData)}));
    }

    const handleChangeChoice = (value) => {
        let data = [...catalogItems];
        if (value === "toLowRate") {
            handleLowHighRate(data, "toLowRate")
        } else if (value === "toHighRate") {
            handleLowHighRate(data, "toHighRate")
        } else {
            handlePopular(data)
        }
        setState(prevState=>({...prevState, filter: value, pagination: {...prevState.pagination, current: 0}}));
    };

    const handleChangeRate = (event, newValue) => {
        let data = [...catalogItems];

        data.map(el => {
            el.showRate = el.rate <= newValue[1] && el.rate >= newValue[0];
            return el;
        })

        data = data.sort(function(a, b) {
            return (a.showRate === b.showRate)? 0 : a.showRate? - 1 : 1;
        });

        data.map((el, i) => {
            el.show = i <= 7;
            return el;
        })

        if (state.filter === "popular") {
            handlePopular(data)
        } else {
            handleLowHighRate(data, state.filter)
        }

        setState(prevState=>({...prevState,
            currentRangeRate: newValue,
            pagination: {
                ...prevState.pagination,
                current: 0,
                array: Array.from(Array(Math.ceil(data.filter(el => el.showRate).length/pagination.count)).keys())
            }
        }));
    };

    return (
        <div className={classes.row}>
            <div className={classes.formGroup}>
                <div className="select-wrap customFilter">
                    Сортировать по:
                    <FormControl className={classes.formControl}>
                        <Select
                            value={state.filter}
                            onChange={(e) => handleChangeChoice(e.target.value)}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={'popular'}>популярности</MenuItem>
                            <MenuItem value={"toHighRate"}>цене по возрастанию</MenuItem>
                            <MenuItem value={"toLowRate"}>цене по убыванию</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className={classes.root}>
                <Typography id="range-slider" gutterBottom>
                    Цена от <span className={classes.bold}>{state.currentRangeRate.length > 0 ? state.currentRangeRate[0] : state.rangeRate[0]}</span> до <span className={classes.bold}>{state.currentRangeRate.length > 0 ? state.currentRangeRate[1] : state.rangeRate[1]}</span> руб
                </Typography>
                <Slider
                    className={classes.customSlider}
                    value={state.currentRangeRate.length > 0 ? state.currentRangeRate : state.rangeRate}
                    min={state.rangeRate[0]}
                    step={10}
                    max={state.rangeRate[1]}
                    onChange={handleChangeRate}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </div>
        </div>
    );
}

export default Filter;