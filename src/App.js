import React from 'react'
import './App.css'
import Home from './pages/home.component'
import { Route, Switch } from 'react-router-dom'

function Hats() {
    return <div>Hats Page</div>
}

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/shop/hats" component={Hats}></Route>
            </Switch>
        </div>
    )
}

export default App
