import React, { Component } from "react";
import Axios from "axios";

class HomeTimeline extends Component {
    constructor() {
        super();
        this.state = {  
            response: []

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/hometimeline/").then(response => {
      console.log(response);
      console.log('hi');
      if (response) {
    
        this.setState({
            response: response
          
        });
      }
    });
  }


    render() { 


      console.log('Response data');
        console.log(this.state.response.data);

        data = "";
        if(this.state.response.data != undefined)
        {
          var data = this.state.response.data.data;
          console.log(data);
        }
        
        return ( 

            <div> 
                 <code>{JSON.stringify(data)}</code>
            </div>
         );
    }
}
 
export default HomeTimeline;