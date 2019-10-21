import React, { Component } from "react";
import Axios from "axios";

class FriendsID extends Component {
    constructor() {
        super();
        this.state = {  
            response: []

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/friendsid/").then(response => {
      console.log(response);
      console.log('hi');
      if (response) {
    
        this.setState({
            response: response.data.data.ids
          
        });
      }
    });
  }


    render() { 


      console.log('Response data');
        console.log(this.state.response);
        
        return ( 

          <div> 
          {this.state.response.map((response) => (
            <p class="round3 shadow" key={response}>
              <b>IDS:</b> {response},
              
            </p>
          ))}
      </div>
           
         );
    }
}
 
export default FriendsID;