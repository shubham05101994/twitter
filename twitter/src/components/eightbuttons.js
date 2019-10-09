import React, { Component } from "react";
import { Link } from "react-router-dom";


class Eightbuttons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  

            
          <div>
            <p>Below are the Twitter APIs used</p>
            
          <button className="btn btn-primary"><Link to="/search" >Search Tweets with the word 'rainbow'</Link></button> 
          <button className="btn btn-primary"><Link to="/hometimeline">Home_Timeline</Link></button> 
          <button className="btn btn-primary"><Link to="/usertimeline">User_Timeline</Link></button> 
          <button className="btn btn-primary"><Link to="/mentionstimeline">Mentions_Timeline</Link></button> 
          <button className="btn btn-primary"><Link to="/friendsid">Friends_Id</Link></button> 
          <button className="btn btn-primary"><Link to="/accountssettings">Accounts_Settings</Link></button> 
          <button className="btn btn-primary"><Link to="/followerslist">Followers_Lists</Link></button> 
          <button className="btn btn-primary"><Link to="/mute">Mute_Users_List</Link></button> 
          
    </div>
            
            
            
            
          
        );
    }
}
 
export default Eightbuttons;