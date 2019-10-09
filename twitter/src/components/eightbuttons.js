import React, { Component } from "react";
import { Link } from "react-router-dom";


class Eightbuttons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  

            
          <div className = "App">
            <p>Below are the Twitter APIs used</p>
            
          <button className="FormField__Button"><Link to="/search" >Search Tweets with the word 'rainbow'</Link></button> <br />
          <br />
          <button className="FormField__Button"><Link to="/hometimeline">Home_Timeline</Link></button> <br />
          <br />
          <button className="FormField__Button"><Link to="/usertimeline">User_Timeline</Link></button> <br />
          <br />
          <button className="FormField__Button"><Link to="/mentionstimeline">Mentions_Timeline</Link></button><br />
          <br /> 
          <button className="FormField__Button"><Link to="/friendsid">Friends_Id</Link></button> <br />
          <br />
          <button className="FormField__Button"><Link to="/accountssettings">Accounts_Settings</Link></button> <br />
          <br />
          <button className="FormField__Button"><Link to="/friendslist">Friends_List</Link></button> <br />
          <br />
          <button className="FormField__Button"><Link to="/mute">Mute_Users_List</Link></button> <br />
          <br />
          
    </div>
          
        );
    }
}
 
export default Eightbuttons;