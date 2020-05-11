import React from 'react'
import './App.css'
import Home from './pages/home/home.component'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-signup/sign-in-and-signup'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: null,
        }
    }

    unsubscribefromauth = null

    componentDidMount() {
        this.unsubscribefromauth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user })

            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribefromauth()
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/shop" component={ShopPage}></Route>
                    <Route path="/signin" component={SignInAndSignUp}></Route>
                </Switch>
            </div>
        )
    }
}

export default App
