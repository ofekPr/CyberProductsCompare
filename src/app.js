import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {BrowserRouter, Route} from 'react-router-dom'
import LogIn from './components/LogIn'
import Products from './components/Products'
import { Firewall, Antivirus, MobileSecurity, NetworkSecurity, CloudSecurity } from './components/Product'
import Home from './components/Home'

const AppRoot = () => (
    <div>
        <BrowserRouter>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/logIn" component={LogIn}/>
            <Route path="/products" component={Products}/>
            <Route path="/antivirus" component={Antivirus}/>
            <Route path="/firewall" component={Firewall}/>
            <Route path="/mobile-security" component={MobileSecurity}/>
            <Route path="/cloud-security" component={CloudSecurity}/>
            <Route path="/network-security" component={NetworkSecurity}/>
        </BrowserRouter>
    </div>
)
ReactDOM.render(<AppRoot /> , document.getElementById('app'))
