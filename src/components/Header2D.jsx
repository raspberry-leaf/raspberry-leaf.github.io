import React from "react";

const Header2D = (props) => {
    const {back, forward} = props;

    return (
        <div className="container">
            <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center">
                    <h1 className="big">{forward}</h1>
                    <h2 className="mb-4">{back}</h2>
                </div>
            </div>
        </div>
    );
}

export default Header2D;