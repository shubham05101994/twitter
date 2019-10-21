import React, { Component } from "react";
import Axios from "axios";


class Savedsearch extends Component {
    constructor() {
        super();
        this.state = {  
            response: []

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/savedsearchlist/").then(response => {
      console.log(response);
      console.log('hi');
      if (response) {
    
        this.setState({
            response: response.data.data
          
        });
      }
    });
  }


    render() { 


     
        
        return ( 

          <div>
          {this.state.response.map(response => (
            <p className="round3 shadow" key={response.id}>
              <b>Created_At:</b> {response.created_at},<b>ID:</b> {response.id},
              <b>id_str:</b> {response.id_str},<b>name:</b> {response.name},
              <b>position:</b> {response.position},
              <b>query:</b> {response.query},
              <b>Name:</b> {response.name},
             
            </p>
          ))}
        </div>
         );
    }
}
 
export default Savedsearch;