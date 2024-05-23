import React from "react";
import "../NavbarComponent/NavbarComponent.scss";
class NavbarComponent extends React.Component {
    render() {
        return (
            <div className="NavbarHeader">
                <div className="LeftNavHeader">
                    <a href=" ">Rao vặt</a>
                    <a href=" ">Tư vấn</a>
                    <a href=" ">Hỏi đáp</a>
                    <a href=" ">Hỗ trợ</a>
                </div>
                <div className="RightNavHeader">
                    <a href=" ">Giỏ hàng</a>
                    <a href=" ">Thông báo</a>
                    <a href=" ">Phan Quang Huy</a>
                </div>
            </div>
        );
    }
}

export default NavbarComponent;
