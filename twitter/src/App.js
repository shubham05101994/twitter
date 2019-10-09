import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Eightbuttons from "./components/eightbuttons";
import Mutelist from "./components/mute";
import Accountssettings from "./components/accountssettings";
import Followerslist from "./components/followerslist";
import Friendsid from "./components/friendsid";
import Hometimeline from "./components/hometimeline";
import Mentionstimeline from "./components/mentionstimeline";
import Search from "./components/search";
import Usertimeline from "./components/usertimeline";


function App() {
  return (
    <Router>
      <div className="container">
       
        <Route path="/" exact component={Eightbuttons} />
        <Route path="/mute" component={Mutelist} />
        <Route path="/accountssettings" component={Accountssettings} />
        <Route path="/followerslist" component={Followerslist} />
        <Route path="/friendsid" component={Friendsid} />
        <Route path="/hometimeline" component={Hometimeline} />
        <Route path="/mentionstimeline" component={Mentionstimeline} />
        <Route path="/search" component={Search} />
        <Route path="/usertimeline" component={Usertimeline} />
      </div>
    </Router>
  );
}

export default App;
