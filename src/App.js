import React from 'react'
import './App.css'
import Home from './pages/home/home.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/shop" component={ShopPage}></Route>
            </Switch>
        </div>
    )
}

export default App
