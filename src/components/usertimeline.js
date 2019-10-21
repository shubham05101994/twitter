import React, { Component } from "react";
import Axios from "axios";

class UsersTimeline extends Component {
    constructor() {
        super();
        this.state = {  
            response: ''

        }
    }

  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/usertimeline/").then(response => {
      console.log(response);
      console.log('hi');
      if (response) {
    
        this.setState({
            response: response.data.data[0]
          
        });
      }
    });
  }


    render() { 


      console.log('Response data');
        console.log(this.state.response);

        
        return ( 

          <div> 
         <p className="round3 shadow" key={this.state.response.id}>
            <b>Created_At: </b>{JSON.stringify(this.state.response.created_at)},
            <b>Text: </b>{JSON.stringify(this.state.response.text)},
            <b>Source: </b>{JSON.stringify(this.state.response.source)},
            <b>Language:</b>{JSON.stringify(this.state.response.lang)}
            
            
             
          </p>
      </div>



            
         );
    }
}
 
export default UsersTimeline;