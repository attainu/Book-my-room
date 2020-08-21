import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import Home from './components/home';
import RoomList from './components/room-list';
import RoomDetails from './components/room-details';
import Contact from './components/contact';
import Main from './Pages/LoginSignUpPage'
import Checkout from './components/booking-components/Checkout';
import {createStore} from 'redux';
import allReducers from "./reducers";
import {Provider} from 'react-redux';
import Welcomepage from './Pages/LoggedInPage'

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Root extends Component {
    render() {
        return(
			<Provider store={store}>
                <Router basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={Home} />
						<Route path="/login" component={Main} />
						<Route exact path="/loggedin" component={Welcomepage} />
	                    <Route path="/room-list" component={RoomList} />
	                    <Route path="/room-details" component={RoomDetails} />
	                    <Route path="/contact" component={Contact} />    
						<Route path="/room-booking" component={Checkout} />  
	                </Switch>
	                </div>
                </Router>
			</Provider>
        )
    }
}
export default Root;
