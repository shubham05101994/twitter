import React, { Component } from "react";
import Axios from "axios";

class Mute extends Component {
  constructor() {
    super();
    this.state = {
      response: [],
      data: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/mute/").then(response => {
      console.log("hi", response);

      if (response) {
        this.setState({
          response: response
        });
        if (this.state.response.data !== undefined) {
          var data1 = this.state.response.data.data.users;
          this.setState({
            data: data1
          });
          console.log("data1 bro", this.state.data);
        }
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map(response => (
          <p className="round3 shadow" key={response.id}>
            <b>Created_At:</b> {response.created_at},<b>ID:</b> {response.id},
            <b>Source:</b> {response.source},<b>Text:</b> {response.text},
            <b>Description:</b> {response.description},
            <b>Favourties Count:</b> {response.friends_count},
            <b>Followers Count:</b> {response.followers_count},
            <b>Friends Count:</b> {response.favourites_count},<b>Name:</b>{" "}
            {response.name},<b>Screen Name:</b> {response.screen_name}
            ,<b>Profile Background Image URL:</b>{" "}
            {response.profile_background_image_url_https},<b>URL:</b>{" "}
            {response.profile_background_image_url_https}
          </p>
        ))}
      </div>
    );
  }
}

export default Mute;
