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
      //console.log(response);
     // console.log('hi');
      if (response) {
    
        this.setState({
            response: response
          
        });

      }
    });
  }


    render() { 

        
        data0 = "";
        if(this.state.response.data !== undefined)
        {
          var data0 = this.state.response.data.data.users[0];
          
        }

        data1 = "";
        if(this.state.response.data !== undefined)
        {
          var data1 = this.state.response.data.data.users[1];
          //console.log(data1);
        }

        data2 = "";
        if(this.state.response.data != undefined)
        {
          var data2 = this.state.response.data.data.users[2];
          //console.log(data2);
        }

        data3 = "";
        if(this.state.response.data != undefined)
        {
          var data3 = this.state.response.data.data.users[3];
          //console.log(data3);
        }

        data4 = "";
        if(this.state.response.data != undefined)
        {
          var data4 = this.state.response.data.data.users[4];
          //console.log(data4);
        }

        data5 = "";
        if(this.state.response.data != undefined)
        {
          var data5 = this.state.response.data.data.users[5];
          //console.log(data5);
        }

        data6 = "";
        if(this.state.response.data != undefined)
        {
          var data6 = this.state.response.data.data.users[6];
         // console.log(data6);
        }
        
        return ( 

            <div className= "twitter"> 
              <div>
                created_at:<code>{JSON.stringify(data0.created_at)}</code><br />
                description:<code>{JSON.stringify(data0.description)}</code><br />
                favourites_count:<code>{JSON.stringify(data0.favourites_count)}</code><br />
                follow_request_sent:<code>{JSON.stringify(data0.follow_request_sent)}</code><br />
                followers_count:<code>{JSON.stringify(data0.followers_count)}</code><br />
                following:<code>{JSON.stringify(data0.following)}</code><br />
                friends_count:<code>{JSON.stringify(data0.friends_count)}</code><br />
                geo_enabled:<code>{JSON.stringify(data0.geo_enabled)}</code><br />
                id:<code>{JSON.stringify(data0.id)}</code><br />
                id_str:<code>{JSON.stringify(data0.id_str)}</code><br />
                listed_count:<code>{JSON.stringify(data0.listed_count)}</code><br />
                location:<code>{JSON.stringify(data0.location)}</code><br />
                muting:<code>{JSON.stringify(data0.muting)}</code><br />
                name:<code>{JSON.stringify(data0.name)}</code><br />
                notifications:<code>{JSON.stringify(data0.notifications)}</code><br />
                profile_background_color:<code>{JSON.stringify(data0.profile_background_color)}</code><br />
                profile_background_image_url:<code>{JSON.stringify(data0.profile_background_image_url)}</code><br />
                profile_background_image_url_https:<code>{JSON.stringify(data0.profile_background_image_url_https)}</code><br />
                profile_background_tile:<code>{JSON.stringify(data0.profile_background_tile)}</code><br />
                profile_banner_url:<code>{JSON.stringify(data0.profile_banner_url)}</code><br />
                profile_image_url:<code>{JSON.stringify(data0.profile_image_url)}</code><br />
                profile_image_url_https:<code>{JSON.stringify(data0.profile_image_url_https)}</code><br />
                profile_link_color:<code>{JSON.stringify(data0.profile_link_color)}</code><br />
                profile_sidebar_border_color:<code>{JSON.stringify(data0.profile_sidebar_border_color)}</code><br />
                profile_sidebar_fill_color:<code>{JSON.stringify(data0.profile_sidebar_fill_color)}</code><br />
                profile_text_color:<code>{JSON.stringify(data0.profile_text_color)}</code><br />
                profile_use_background_image:<code>{JSON.stringify(data0.profile_use_background_image)}</code><br />
                screen_name:<code>{JSON.stringify(data0.screen_name)}</code><br />
                statuses_count:<code>{JSON.stringify(data0.statuses_count)}</code><br />
                time_zone:<code>{JSON.stringify(data0.time_zone)}</code><br />
                url:<code>{JSON.stringify(data0.url)}</code><br />
                verified:<code>{JSON.stringify(data0.verified)}</code><br />
            </div>

<div> 
created_at:<code>{JSON.stringify(data1.created_at)}</code><br />
description:<code>{JSON.stringify(data1.description)}</code><br />
favourites_count:<code>{JSON.stringify(data1.favourites_count)}</code><br />
follow_request_sent:<code>{JSON.stringify(data1.follow_request_sent)}</code><br />
followers_count:<code>{JSON.stringify(data1.followers_count)}</code><br />
following:<code>{JSON.stringify(data1.following)}</code><br />
friends_count:<code>{JSON.stringify(data1.friends_count)}</code><br />
geo_enabled:<code>{JSON.stringify(data1.geo_enabled)}</code><br />
id:<code>{JSON.stringify(data1.id)}</code><br />
id_str:<code>{JSON.stringify(data1.id_str)}</code><br />
listed_count:<code>{JSON.stringify(data1.listed_count)}</code><br />
location:<code>{JSON.stringify(data1.location)}</code><br />
muting:<code>{JSON.stringify(data1.muting)}</code><br />
name:<code>{JSON.stringify(data1.name)}</code><br />
notifications:<code>{JSON.stringify(data1.notifications)}</code><br />
profile_background_color:<code>{JSON.stringify(data1.profile_background_color)}</code><br />
profile_background_image_url:<code>{JSON.stringify(data1.profile_background_image_url)}</code><br />
profile_background_image_url_https:<code>{JSON.stringify(data1.profile_background_image_url_https)}</code><br />
profile_background_tile:<code>{JSON.stringify(data1.profile_background_tile)}</code><br />
profile_banner_url:<code>{JSON.stringify(data1.profile_banner_url)}</code><br />
profile_image_url:<code>{JSON.stringify(data1.profile_image_url)}</code><br />
profile_image_url_https:<code>{JSON.stringify(data1.profile_image_url_https)}</code><br />
profile_link_color:<code>{JSON.stringify(data1.profile_link_color)}</code><br />
profile_sidebar_border_color:<code>{JSON.stringify(data1.profile_sidebar_border_color)}</code><br />
profile_sidebar_fill_color:<code>{JSON.stringify(data1.profile_sidebar_fill_color)}</code><br />
profile_text_color:<code>{JSON.stringify(data1.profile_text_color)}</code><br />
profile_use_background_image:<code>{JSON.stringify(data1.profile_use_background_image)}</code><br />
screen_name:<code>{JSON.stringify(data1.screen_name)}</code><br />
statuses_count:<code>{JSON.stringify(data1.statuses_count)}</code><br />
time_zone:<code>{JSON.stringify(data1.time_zone)}</code><br />
url:<code>{JSON.stringify(data1.url)}</code><br />
verified:<code>{JSON.stringify(data1.verified)}</code><br />
</div>


<div> 
created_at:<code>{JSON.stringify(data2.created_at)}</code><br />
description:<code>{JSON.stringify(data2.description)}</code><br />
favourites_count:<code>{JSON.stringify(data2.favourites_count)}</code><br />
follow_request_sent:<code>{JSON.stringify(data2.follow_request_sent)}</code><br />
followers_count:<code>{JSON.stringify(data2.followers_count)}</code><br />
following:<code>{JSON.stringify(data2.following)}</code><br />
friends_count:<code>{JSON.stringify(data2.friends_count)}</code><br />
geo_enabled:<code>{JSON.stringify(data2.geo_enabled)}</code><br />
id:<code>{JSON.stringify(data2.id)}</code><br />
id_str:<code>{JSON.stringify(data2.id_str)}</code><br />
listed_count:<code>{JSON.stringify(data2.listed_count)}</code><br />
location:<code>{JSON.stringify(data2.location)}</code><br />
muting:<code>{JSON.stringify(data2.muting)}</code><br />
name:<code>{JSON.stringify(data2.name)}</code><br />
notifications:<code>{JSON.stringify(data2.notifications)}</code><br />
profile_background_color:<code>{JSON.stringify(data2.profile_background_color)}</code><br />
profile_background_image_url:<code>{JSON.stringify(data2.profile_background_image_url)}</code><br />
profile_background_image_url_https:<code>{JSON.stringify(data2.profile_background_image_url_https)}</code><br />
profile_background_tile:<code>{JSON.stringify(data2.profile_background_tile)}</code><br />
profile_banner_url:<code>{JSON.stringify(data2.profile_banner_url)}</code><br />
profile_image_url:<code>{JSON.stringify(data2.profile_image_url)}</code><br />
profile_image_url_https:<code>{JSON.stringify(data2.profile_image_url_https)}</code><br />
profile_link_color:<code>{JSON.stringify(data2.profile_link_color)}</code><br />
profile_sidebar_border_color:<code>{JSON.stringify(data2.profile_sidebar_border_color)}</code><br />
profile_sidebar_fill_color:<code>{JSON.stringify(data2.profile_sidebar_fill_color)}</code><br />
profile_text_color:<code>{JSON.stringify(data2.profile_text_color)}</code><br />
profile_use_background_image:<code>{JSON.stringify(data2.profile_use_background_image)}</code><br />
screen_name:<code>{JSON.stringify(data2.screen_name)}</code><br />
statuses_count:<code>{JSON.stringify(data2.statuses_count)}</code><br />
time_zone:<code>{JSON.stringify(data2.time_zone)}</code><br />
url:<code>{JSON.stringify(data2.url)}</code><br />
verified:<code>{JSON.stringify(data2.verified)}</code><br />
</div>


<div> 
created_at:<code>{JSON.stringify(data3.created_at)}</code><br />
description:<code>{JSON.stringify(data3.description)}</code><br />
favourites_count:<code>{JSON.stringify(data3.favourites_count)}</code><br />
follow_request_sent:<code>{JSON.stringify(data3.follow_request_sent)}</code><br />
followers_count:<code>{JSON.stringify(data3.followers_count)}</code><br />
following:<code>{JSON.stringify(data3.following)}</code><br />
friends_count:<code>{JSON.stringify(data3.friends_count)}</code><br />
geo_enabled:<code>{JSON.stringify(data3.geo_enabled)}</code><br />
id:<code>{JSON.stringify(data3.id)}</code><br />
id_str:<code>{JSON.stringify(data3.id_str)}</code><br />
listed_count:<code>{JSON.stringify(data3.listed_count)}</code><br />
location:<code>{JSON.stringify(data3.location)}</code><br />
muting:<code>{JSON.stringify(data3.muting)}</code><br />
name:<code>{JSON.stringify(data3.name)}</code><br />
notifications:<code>{JSON.stringify(data3.notifications)}</code><br />
profile_background_color:<code>{JSON.stringify(data3.profile_background_color)}</code><br />
profile_background_image_url:<code>{JSON.stringify(data3.profile_background_image_url)}</code><br />
profile_background_image_url_https:<code>{JSON.stringify(data3.profile_background_image_url_https)}</code><br />
profile_background_tile:<code>{JSON.stringify(data3.profile_background_tile)}</code><br />
profile_banner_url:<code>{JSON.stringify(data3.profile_banner_url)}</code><br />
profile_image_url:<code>{JSON.stringify(data3.profile_image_url)}</code><br />
profile_image_url_https:<code>{JSON.stringify(data3.profile_image_url_https)}</code><br />
profile_link_color:<code>{JSON.stringify(data3.profile_link_color)}</code><br />
profile_sidebar_border_color:<code>{JSON.stringify(data3.profile_sidebar_border_color)}</code><br />
profile_sidebar_fill_color:<code>{JSON.stringify(data3.profile_sidebar_fill_color)}</code><br />
profile_text_color:<code>{JSON.stringify(data3.profile_text_color)}</code><br />
profile_use_background_image:<code>{JSON.stringify(data3.profile_use_background_image)}</code><br />
screen_name:<code>{JSON.stringify(data3.screen_name)}</code><br />
statuses_count:<code>{JSON.stringify(data3.statuses_count)}</code><br />
time_zone:<code>{JSON.stringify(data3.time_zone)}</code><br />
url:<code>{JSON.stringify(data3.url)}</code><br />
verified:<code>{JSON.stringify(data3.verified)}</code><br />
</div>


<div> 
created_at:<code>{JSON.stringify(data4.created_at)}</code><br />
description:<code>{JSON.stringify(data4.description)}</code><br />
favourites_count:<code>{JSON.stringify(data4.favourites_count)}</code><br />
follow_request_sent:<code>{JSON.stringify(data4.follow_request_sent)}</code><br />
followers_count:<code>{JSON.stringify(data4.followers_count)}</code><br />
following:<code>{JSON.stringify(data4.following)}</code><br />
friends_count:<code>{JSON.stringify(data4.friends_count)}</code><br />
geo_enabled:<code>{JSON.stringify(data4.geo_enabled)}</code><br />
id:<code>{JSON.stringify(data4.id)}</code><br />
id_str:<code>{JSON.stringify(data4.id_str)}</code><br />
listed_count:<code>{JSON.stringify(data4.listed_count)}</code><br />
location:<code>{JSON.stringify(data4.location)}</code><br />
muting:<code>{JSON.stringify(data4.muting)}</code><br />
name:<code>{JSON.stringify(data4.name)}</code><br />
notifications:<code>{JSON.stringify(data4.notifications)}</code><br />
profile_background_color:<code>{JSON.stringify(data4.profile_background_color)}</code><br />
profile_background_image_url:<code>{JSON.stringify(data4.profile_background_image_url)}</code><br />
profile_background_image_url_https:<code>{JSON.stringify(data4.profile_background_image_url_https)}</code><br />
profile_background_tile:<code>{JSON.stringify(data4.profile_background_tile)}</code><br />
profile_banner_url:<code>{JSON.stringify(data4.profile_banner_url)}</code><br />
profile_image_url:<code>{JSON.stringify(data4.profile_image_url)}</code><br />
profile_image_url_https:<code>{JSON.stringify(data4.profile_image_url_https)}</code><br />
profile_link_color:<code>{JSON.stringify(data4.profile_link_color)}</code><br />
profile_sidebar_border_color:<code>{JSON.stringify(data4.profile_sidebar_border_color)}</code><br />
profile_sidebar_fill_color:<code>{JSON.stringify(data4.profile_sidebar_fill_color)}</code><br />
profile_text_color:<code>{JSON.stringify(data4.profile_text_color)}</code><br />
profile_use_background_image:<code>{JSON.stringify(data4.profile_use_background_image)}</code><br />
screen_name:<code>{JSON.stringify(data4.screen_name)}</code><br />
statuses_count:<code>{JSON.stringify(data4.statuses_count)}</code><br />
time_zone:<code>{JSON.stringify(data4.time_zone)}</code><br />
url:<code>{JSON.stringify(data4.url)}</code><br />
verified:<code>{JSON.stringify(data4.verified)}</code><br />
</div>


<div> 
created_at:<code>{JSON.stringify(data5.created_at)}</code><br />
description:<code>{JSON.stringify(data5.description)}</code><br />
favourites_count:<code>{JSON.stringify(data5.favourites_count)}</code><br />
follow_request_sent:<code>{JSON.stringify(data5.follow_request_sent)}</code><br />
followers_count:<code>{JSON.stringify(data5.followers_count)}</code><br />
following:<code>{JSON.stringify(data5.following)}</code><br />
friends_count:<code>{JSON.stringify(data5.friends_count)}</code><br />
geo_enabled:<code>{JSON.stringify(data5.geo_enabled)}</code><br />
id:<code>{JSON.stringify(data5.id)}</code><br />
id_str:<code>{JSON.stringify(data5.id_str)}</code><br />
listed_count:<code>{JSON.stringify(data5.listed_count)}</code><br />
location:<code>{JSON.stringify(data5.location)}</code><br />
muting:<code>{JSON.stringify(data5.muting)}</code><br />
name:<code>{JSON.stringify(data5.name)}</code><br />
notifications:<code>{JSON.stringify(data5.notifications)}</code><br />
profile_background_color:<code>{JSON.stringify(data5.profile_background_color)}</code><br />
profile_background_image_url:<code>{JSON.stringify(data5.profile_background_image_url)}</code><br />
profile_background_image_url_https:<code>{JSON.stringify(data5.profile_background_image_url_https)}</code><br />
profile_background_tile:<code>{JSON.stringify(data5.profile_background_tile)}</code><br />
profile_banner_url:<code>{JSON.stringify(data5.profile_banner_url)}</code><br />
profile_image_url:<code>{JSON.stringify(data5.profile_image_url)}</code><br />
profile_image_url_https:<code>{JSON.stringify(data5.profile_image_url_https)}</code><br />
profile_link_color:<code>{JSON.stringify(data5.profile_link_color)}</code><br />
profile_sidebar_border_color:<code>{JSON.stringify(data5.profile_sidebar_border_color)}</code><br />
profile_sidebar_fill_color:<code>{JSON.stringify(data5.profile_sidebar_fill_color)}</code><br />
profile_text_color:<code>{JSON.stringify(data5.profile_text_color)}</code><br />
profile_use_background_image:<code>{JSON.stringify(data5.profile_use_background_image)}</code><br />
screen_name:<code>{JSON.stringify(data5.screen_name)}</code><br />
statuses_count:<code>{JSON.stringify(data5.statuses_count)}</code><br />
time_zone:<code>{JSON.stringify(data5.time_zone)}</code><br />
url:<code>{JSON.stringify(data5.url)}</code><br />
verified:<code>{JSON.stringify(data5.verified)}</code><br />
</div>


<div> 
created_at:<code>{JSON.stringify(data6.created_at)}</code><br />
description:<code>{JSON.stringify(data6.description)}</code><br />
favourites_count:<code>{JSON.stringify(data6.favourites_count)}</code><br />
follow_request_sent:<code>{JSON.stringify(data6.follow_request_sent)}</code><br />
followers_count:<code>{JSON.stringify(data6.followers_count)}</code><br />
following:<code>{JSON.stringify(data6.following)}</code><br />
friends_count:<code>{JSON.stringify(data6.friends_count)}</code><br />
geo_enabled:<code>{JSON.stringify(data6.geo_enabled)}</code><br />
id:<code>{JSON.stringify(data6.id)}</code><br />
id_str:<code>{JSON.stringify(data6.id_str)}</code><br />
listed_count:<code>{JSON.stringify(data6.listed_count)}</code><br />
location:<code>{JSON.stringify(data6.location)}</code><br />
muting:<code>{JSON.stringify(data6.muting)}</code><br />
name:<code>{JSON.stringify(data6.name)}</code><br />
notifications:<code>{JSON.stringify(data6.notifications)}</code><br />
profile_background_color:<code>{JSON.stringify(data6.profile_background_color)}</code><br />
profile_background_image_url:<code>{JSON.stringify(data6.profile_background_image_url)}</code><br />
profile_background_image_url_https:<code>{JSON.stringify(data6.profile_background_image_url_https)}</code><br />
profile_background_tile:<code>{JSON.stringify(data6.profile_background_tile)}</code><br />
profile_banner_url:<code>{JSON.stringify(data6.profile_banner_url)}</code><br />
profile_image_url:<code>{JSON.stringify(data6.profile_image_url)}</code><br />
profile_image_url_https:<code>{JSON.stringify(data6.profile_image_url_https)}</code><br />
profile_link_color:<code>{JSON.stringify(data6.profile_link_color)}</code><br />
profile_sidebar_border_color:<code>{JSON.stringify(data6.profile_sidebar_border_color)}</code><br />
profile_sidebar_fill_color:<code>{JSON.stringify(data6.profile_sidebar_fill_color)}</code><br />
profile_text_color:<code>{JSON.stringify(data6.profile_text_color)}</code><br />
profile_use_background_image:<code>{JSON.stringify(data6.profile_use_background_image)}</code><br />
screen_name:<code>{JSON.stringify(data6.screen_name)}</code><br />
statuses_count:<code>{JSON.stringify(data6.statuses_count)}</code><br />
time_zone:<code>{JSON.stringify(data6.time_zone)}</code><br />
url:<code>{JSON.stringify(data6.url)}</code><br />
verified:<code>{JSON.stringify(data6.verified)}</code><br />
</div>

</div>
         );
    }
}
 
export default FriendsList;