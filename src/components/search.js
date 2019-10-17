import React, { Component } from "react";
import Axios from "axios";

class Search extends Component {
    constructor() {
        super();
        this.state = {  
            response: []

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/search/").then(response => {
      console.log(response);
      console.log('hi');
      if (response) {
    
        this.setState({
            response: response.data.data.statuses
          
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
              <b>Source:</b> {response.source},<b>Text:</b> {response.text},
              <b>Description:</b> {response.description},
              <b>Favourties Count:</b> {response.friends_count},
              <b>Followers Count:</b> {response.followers_count},
              <b>Friends Count:</b> {response.favourites_count},<b>Name:</b>{" "}
              {response.name},<b>Screen Name:</b> {response.screen_name}
              ,<b>Profile Background Image URL:</b>{" "},
              <b>Retweet_count:</b>{response.retweet_count}
              {response.user.profile_background_image_url_https},<b>URL:</b>{" "}
              {response.user.profile_background_image_url_https},
              <b>Language:</b> {response.lang},
              <b>Text:</b> {response.text},
              <b>Location:</b> {response.user.location},
              <b>Screen Name:</b> {response.user.screen_name}
            </p>
          ))}
        </div>
         );
    }
}
 
export default Search;