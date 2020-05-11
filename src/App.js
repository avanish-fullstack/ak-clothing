import React from 'react'
import './App.css'
import Home from './pages/home/home.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-signup/sign-in-and-signup'

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/shop" component={ShopPage}></Route>
                <Route path="/signin" component={SignInAndSignUp}></Route>
            </Switch>
        </div>
    )
}

export default App
