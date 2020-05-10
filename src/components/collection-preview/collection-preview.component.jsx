import React from 'react'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                    .filter((data) => data.id <= 4)
                    .map((item) => (
                        <div>{item.name}</div>
                    ))}
            </div>
        </div>
    )
}

export default CollectionPreview
