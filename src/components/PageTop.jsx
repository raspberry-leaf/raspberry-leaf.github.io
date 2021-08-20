import React from "react";

const PageTop = (props) => {
    const {title, imageName} = props;

    return (
        <div className={`hero-wrap hero-bread hero-rasp-${imageName}`}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 text-center">
                        <h1 className="mb-0 bread">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageTop;