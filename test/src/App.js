import React from 'react';
import { useSelector } from 'react-redux';

//PAGES
import WelcomePage from './Pages/WelcomePage';
import LoggedInPage from './Pages/LoggedInPage'


function App() {
    var isLogged = useSelector(state=>state.isLogged)
  return (
    <div className="App">
    {isLogged?<LoggedInPage/>:<WelcomePage/>}
      
    </div>
  );
}

export default App;
