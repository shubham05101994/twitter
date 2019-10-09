import React, { Component } from "react";
import Axios from "axios";

class AccountsSettings extends Component {
    constructor() {
        super();
        this.state = {  
            response: ''
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:5000/twitt/accountssettings/").then(response => {
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
        console.log('Response data application settings');
        console.log(this.state.response);

        data = "";
        if(this.state.response.data != undefined)
        {
          var data = this.state.response.data;
          console.log(data);
        }
        return ( 
            <div className= "twitter">
                 <code>{JSON.stringify(data)}</code>
            </div>
         );
    }
}
 
export default AccountsSettings;