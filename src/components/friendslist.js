import React, { Component } from "react";
import Axios from "axios";

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {  
            response: []

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/friendslist/").then(response => {
      console.log(response);
      console.log('hi');
      if (response) {
    
        this.setState({
            response: response.data.data.users
          
        });
      }
    });
  }


    render() { 


        return ( 

            <div> 
              
{this.state.response.map((response) => (
  <p className="round3 shadow" key={response.id}>
    created_at:<code>{JSON.stringify(response.created_at)}</code><br />
                description:<code>{JSON.stringify(response.description)}</code><br />
                favourites_count:<code>{JSON.stringify(response.favourites_count)}</code><br />
                follow_request_sent:<code>{JSON.stringify(response.follow_request_sent)}</code><br />
                followers_count:<code>{JSON.stringify(response.followers_count)}</code><br />
                following:<code>{JSON.stringify(response.following)}</code><br />
                friends_count:<code>{JSON.stringify(response.friends_count)}</code><br />
                geo_enabled:<code>{JSON.stringify(response.geo_enabled)}</code><br />
                id:<code>{JSON.stringify(response.id)}</code><br />
                id_str:<code>{JSON.stringify(response.id_str)}</code><br />
                listed_count:<code>{JSON.stringify(response.listed_count)}</code><br />
                location:<code>{JSON.stringify(response.location)}</code><br />
                muting:<code>{JSON.stringify(response.muting)}</code><br />
                name:<code>{JSON.stringify(response.name)}</code><br />
                notifications:<code>{JSON.stringify(response.notifications)}</code><br />
                profile_background_color:<code>{JSON.stringify(response.profile_background_color)}</code><br />
                profile_background_image_url:<code>{JSON.stringify(response.profile_background_image_url)}</code><br />
                profile_background_image_url_https:<code>{JSON.stringify(response.profile_background_image_url_https)}</code><br />
                profile_background_tile:<code>{JSON.stringify(response.profile_background_tile)}</code><br />
                profile_banner_url:<code>{JSON.stringify(response.profile_banner_url)}</code><br />
                profile_image_url:<code>{JSON.stringify(response.profile_image_url)}</code><br />
                profile_image_url_https:<code>{JSON.stringify(response.profile_image_url_https)}</code><br />
                profile_link_color:<code>{JSON.stringify(response.profile_link_color)}</code><br />
                profile_sidebar_border_color:<code>{JSON.stringify(response.profile_sidebar_border_color)}</code><br />
                profile_sidebar_fill_color:<code>{JSON.stringify(response.profile_sidebar_fill_color)}</code><br />
                profile_text_color:<code>{JSON.stringify(response.profile_text_color)}</code><br />
                profile_use_background_image:<code>{JSON.stringify(response.profile_use_background_image)}</code><br />
                screen_name:<code>{JSON.stringify(response.screen_name)}</code><br />
                statuses_count:<code>{JSON.stringify(response.statuses_count)}</code><br />
                time_zone:<code>{JSON.stringify(response.time_zone)}</code><br />
                url:<code>{JSON.stringify(response.url)}</code><br />
                verified:<code>{JSON.stringify(response.verified)}</code><br />
    
  </p>
))}


                
            


</div>
         );
    }
}
 
export default FriendsList;