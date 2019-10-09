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
                 id:<code>{JSON.stringify(data.id)}</code><br />
                    blocked_by:<code>{JSON.stringify(data.blocked_by)}</code> <br />
                    blocking:<code>{JSON.stringify(data.blocking)}</code> <br />
                    contributors_enabled:<code>{JSON.stringify(data.contributors_enabled)}</code> <br />
                    created_at:<code>{JSON.stringify(data.created_at)}</code> <br />
                    default_profile:<code>{JSON.stringify(data.default_profile)}</code> <br />
                    default_profile_image:<code>{JSON.stringify(data.default_profile_image)}</code> <br />
                    description:<code>{JSON.stringify(data.description)}</code> <br />
                    entities:<code>{JSON.stringify(data.entities)}</code> <br />
                    favourites_count:<code>{JSON.stringify(data.favourites_count)}</code> <br />
                    follow_request_sent:<code>{JSON.stringify(data.follow_request_sent)}</code> <br />
                    followers_count:<code>{JSON.stringify(data.followers_count)}</code> <br />
                    following:<code>{JSON.stringify(data.following)}</code> <br />
                    friends_count:<code>{JSON.stringify(data.friends_count)}</code> <br />
                    geo_enabled:<code>{JSON.stringify(data.geo_enabled)}</code> <br />
                    has_extended_profile:<code>{JSON.stringify(data.has_extended_profile)}</code> <br />
                    id:<code>{JSON.stringify(data.id)}</code> <br />
                    id_str:<code>{JSON.stringify(data.id_str)}</code> <br />
                    is_translation_enabled:<code>{JSON.stringify(data.is_translation_enabled)}</code> <br />
                    is_translator:<code>{JSON.stringify(data.is_translator)}</code> <br />
                    lang:<code>{JSON.stringify(data.lang)}</code> <br />
                    listed_count:<code>{JSON.stringify(data.listed_count)}</code> <br />
                    live_following:<code>{JSON.stringify(data.live_following)}</code> <br />
                    location:<code>{JSON.stringify(data.location)}</code> <br />
                    muting:<code>{JSON.stringify(data.muting)}</code> <br />
                    name:<code>{JSON.stringify(data.name)}</code> <br />
                    notifications:<code>{JSON.stringify(data.notifications)}</code> <br />
                    profile_background_color:<code>{JSON.stringify(data.profile_background_color)}</code> <br />
                    profile_background_image_url:<code>{JSON.stringify(data.profile_background_image_url)}</code> <br />
                    profile_background_image_url_https:<code>{JSON.stringify(data.profile_background_image_url_https)}</code> <br />
                    profile_background_tile:<code>{JSON.stringify(data.profile_background_tile)}</code> <br />
                    profile_banner_url:<code>{JSON.stringify(data.profile_banner_url)}</code> <br />
                    profile_image_url:<code>{JSON.stringify(data.profile_image_url)}</code> <br />
                    profile_image_url_https:<code>{JSON.stringify(data.profile_image_url_https)}</code> <br />
                    profile_link_color:<code>{JSON.stringify(data.profile_link_color)}</code> <br />
                    profile_sidebar_border_color:<code>{JSON.stringify(data.profile_sidebar_border_color)}</code> <br />
                    profile_sidebar_fill_color:<code>{JSON.stringify(data.profile_sidebar_fill_color)}</code> <br />
                    profile_text_color:<code>{JSON.stringify(data.profile_text_color)}</code> <br />
                    profile_use_background_image:<code>{JSON.stringify(data.profile_use_background_image)}</code> <br />
                    protected:<code>{JSON.stringify(data.protected)}</code> <br />
                    screen_name:<code>{JSON.stringify(data.screen_name)}</code> <br />
                    status:<code>{JSON.stringify(data.status)}</code> <br />
                    statuses_count:<code>{JSON.stringify(data.statuses_count)}</code> <br />
                    time_zone:<code>{JSON.stringify(data.time_zone)}</code> <br />
                    translator_type:<code>{JSON.stringify(data.translator_type)}</code> <br />
                    url:<code>{JSON.stringify(data.url)}</code> <br />
                    utc_offset:<code>{JSON.stringify(data.utc_offset)}</code> <br />
                    verified:<code>{JSON.stringify(data.verified)}</code> <br />
            </div>
         );
    }
}
 
export default Mute;