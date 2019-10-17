import React, { Component } from "react";
import Axios from "axios";

class AccountsSettings extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      data: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/accountssettings/").then(
      response => {
        if (response) {
          this.setState({
            response: response
          });
          if (this.state.response.data != undefined) {
            var data1 = this.state.response.data.data;
            this.setState({
              data: data1
            });
            console.log("hi", this.state.data.data);
          }
        }
      }
    );
  }

  render() {
    // console.log('Response data application settings');
    // console.log(this.state.response);

    return (
      <div>
        {
          <p className="round3 shadow">
            <b>Screen Name:</b>{JSON.stringify(this.state.data.screen_name)},
            <b>allow_contributor_request:</b> {JSON.stringify(this.state.data.allow_contributor_request)},
            <b>allow_dm_groups_from:</b>{JSON.stringify(this.state.data.allow_dm_groups_from)},
            <b>discoverable_by_email:</b>{JSON.stringify(this.state.data.discoverable_by_email)},
            <b>discoverable_by_mobile_phone:</b>{JSON.stringify(this.state.data.discoverable_by_mobile_phone)},
            <b>display_sensitive_media: </b>{JSON.stringify(this.state.data.display_sensitive_media)},
            <b>geo_enabled:</b>{JSON.stringify(this.state.data.geo_enabled)},
            <b>Language:</b>{JSON.stringify(this.state.data.language)}
             
          </p>
        }
      </div>
    );
  }
}

export default AccountsSettings;
