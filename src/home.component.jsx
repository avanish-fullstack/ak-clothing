import React from 'react'

import './homepage.styles.scss'

const Home = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hat</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Sweaters</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Men</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Women</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Women</h1>
                        <span className="subTitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
