import React from 'react'
import './home.styles.scss'
import Directory from '../components/directory/directory.component'
import MenuItem from '../components/menu-item/menu-item.compoent'

const Home = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}

export default Home
