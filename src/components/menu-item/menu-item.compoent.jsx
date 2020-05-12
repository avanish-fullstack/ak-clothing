import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageURL, size, history, linkUrl, match }) => {
    return (
        <div
            onClick={() => history.push(`${match.url}${linkUrl}`)}
            style={{ backgroundImage: `url(${imageURL})` }}
            className={`${size} menu-item`}
        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subTitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
