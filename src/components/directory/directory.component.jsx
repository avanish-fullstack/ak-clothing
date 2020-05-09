import React from 'react'
import sections from '../../data/data'
import MenuItem from '../menu-item/menu-item.compoent'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            categories: sections,
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.categories.map((cat) => (
                    <MenuItem
                        key={cat.id}
                        title={cat.title}
                        imageURL={cat.imageUrl}
                        size={cat.size}
                    />
                ))}
            </div>
        )
    }
}

export default Directory
