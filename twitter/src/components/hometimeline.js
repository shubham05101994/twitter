import React, { Component } from "react";
import Axios from "axios";

class HomeTimeline extends Component {
    constructor() {
        super();
        this.state = {  
            response: [],
            data: []

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
        console.log(this.state.response.data);

        //data = "";
        if(this.state.response.data != undefined)
        {
          var data1 = this.state.response.data.data;
          this.setState({
            data :data1
          
        });
          
         
          console.log("hi  ",this.state.data);
        }

      }
    });
  }




    render() { 


      //console.log('Response data');
       
        
        return ( 
<div>
    {this.state.data.map((response) => (
        
        <p key={response.id}>

            Hello from {response.created_at}!             retweet_count {response.retweet_count}
            description {response.user.description}
        
        </p>
    ))}
    </div>


         );
    }
}
 
export default HomeTimeline;