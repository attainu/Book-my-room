import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//PAGES
import WelcomePage from './Pages/WelcomePage';
import LoggedInPage from './Pages/LoggedInPage'
import LoginSigupPage from './Pages/LoginSingupPage';
import ListingHotelPage from "./Pages/ListingHotelPage";


function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    <Route exact path="/login" component={LoginSigupPage} />
                    <Route exact path="/loggedin" component={LoggedInPage} />
                    <Route exact path="/hotel/:id" component={ListingHotelPage}/>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
