import React, { Component } from "react";
import Axios from "axios";

class HomeTimeline extends Component {
    constructor() {
        super();
        this.state = {  
            response: [],
            data:[]

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/hometimeline/").then(response => {
      console.log(response);
      if (response) {
    
        this.setState({
            response: response
          
        });
        if(this.state.response.data != undefined)
        {
          var data1 = this.state.response.data.data;
          this.setState({
            data: data1
          
        });
        console.log(this.state.data);
        }
      }
    });
  }


    render() { 
        
        return ( 

            <div> 
                {this.state.data.map((response) => (
                  <p class="round3 shadow" key={response.id}>
                    <b>Created_At:</b> {response.created_at},
                    <b>ID:</b> {response.id},
                    <b>Source:</b> {response.source},
                    <b>Text:</b> {response.text},
                    <b>Description:</b> {response.user.description},
                    <b>Favourties Count:</b> {response.user.favourites_count},
                    <b>Followers Count:</b> {response.user.followers_count},
                    <b>Friends Count:</b> {response.user.friends_count},
                    <b>Name:</b> {response.user.name},
                    <b>Screen Name:</b> {response.user.screen_name},
                    <b>Profile Background Image URL:</b> {response.user.profile_background_image_url_https},
                    <b>URL:</b> {response.user.profile_background_image_url_https}

                  </p>
                ))}
            </div>
         );
    }
}
 
export default HomeTimeline;