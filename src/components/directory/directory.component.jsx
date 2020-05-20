import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.compoent";
import "./directory.styles.scss";
import { selectDirectoryCategories } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map((cat) => (
                <MenuItem
                    key={cat.id}
                    title={cat.title}
                    imageURL={cat.imageUrl}
                    size={cat.size}
                    linkUrl={cat.linkUrl}
                />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectoryCategories,
});

export default connect(mapStateToProps)(Directory);
