import React, { Component } from "react";
import Axios from "axios";

class Mute extends Component {
    constructor() {
        super();
        this.state = {  
            response: []

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/mute/").then(response => {
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
          var data = this.state.response.data.data.users[0];
          console.log(data);
        }
        
        return ( 

            <div>
              <h1>bgcsjafjgdj</h1>  
                    <code>{JSON.stringify(data.id)}</code>
            </div>
         );
    }
}
 
export default Mute;