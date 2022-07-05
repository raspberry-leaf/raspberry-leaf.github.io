import React, {useContext} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import Context from "../Context";

const CustomCheckbox = withStyles({
    root: {
        color: "rgba(241, 184, 196, 0.5)",
        '&$checked': {
            color: "#ffa0af",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const PostcardTick = (props) => {
    const {rates} = useContext(Context);
    const {elem, checked, setChecked} = props;

    return (
         <>
            <FormControlLabel
                control={<CustomCheckbox checked={checked} onChange={() => setChecked(!checked)} name="checkbox" />}
                label={rates.postcard.name}
            />
            <div className="d-flex position-relative">
                <div className="pricing">
                    <p className="price"><span className="price-sale">
                    {checked ? `${elem.rate + rates.postcard.rate}` : elem.rate} руб</span></p>
                </div>
                <div className="freeDelivery">Бесплатная доставка</div>
            </div>
        </>


    );
}

export default PostcardTick;