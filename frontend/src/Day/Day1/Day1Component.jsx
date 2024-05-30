import React from "react";
import "../Day1/Day1Component.scss";

class Day1Component extends React.Component {
    render() {
        return (
            <div id="container">
                <div className="card">
                    <div className="icon">
                        <div className="icon-heart"></div>
                        <div className="icon-cart"></div>
                    </div>
                    <div className="product">
                        <div className="img-product"></div>
                        <div className="name-product"></div>
                        <div className="price-product"></div>
                    </div>
                    <div className="detail-product">
                        <div className="size-product"></div>
                        <div className="color-product"></div>
                    </div>
                    <div className="act-to-product">
                        <div className="buy-now"></div>
                        <div className="add-to-cart"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day1Component;
