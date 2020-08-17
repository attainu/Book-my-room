import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/global-components/navbar';
import RoomList from './components/room-list';
import RoomGrid from './components/room-grid';
import RoomDetails from './components/room-details';
import Service from './components/service';
import BlogGrid from './components/blog-grid';
import BlogList from './components/blog-list';
import BlogDetails from './components/blog-details';
import Gallery from './components/gallery';
import Contact from './components/contact';
import OurStaff from './components/our-staff';
import Resturent from './components/resturent';
import Reservation from './components/reservation';
import About from './components/about';
import Main from './Pages/LoginSignUpPage'
import {createStore} from 'redux';
import allReducers from "./reducers";
import {Provider} from 'react-redux';

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Root extends Component {
    render() {
        return(
			<Provider store={store}>
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/home-v2" component={HomeV2} />
						<Route path="/login" component={Main} />
	                    <Route path="/room-list" component={RoomList} />
	                    <Route path="/room-grid" component={RoomGrid} />
	                    <Route path="/room-details" component={RoomDetails} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/blog-grid" component={BlogGrid} />
	                    <Route path="/blog-list" component={BlogList} />
	                    <Route path="/blog-details" component={BlogDetails} />
	                    <Route path="/gallery" component={Gallery} />
	                    <Route path="/contact" component={Contact} />
	                    <Route path="/our-staff" component={OurStaff} />
	                    <Route path="/resturent" component={Resturent} />
	                    <Route path="/reservation" component={Reservation} />
	                    <Route path="/about" component={About} />
	                </Switch>
	                </div>
                </HashRouter>
				</Provider>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('avson'));
