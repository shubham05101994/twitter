import React, { Component } from "react";
import Axios from "axios";

class FriendsID extends Component {
    constructor() {
        super();
        this.state = {  
            response: []

        }
    }



  componentDidMount() {
    Axios.get("http://localhost:5000/twitt/friendsid/").then(response => {
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
        
        data0 = "";data1 = "";data2 = "";data3 = "";data4 = "";data5 = "";data6 = "";data7 = "";data8 = "";data9 = "";data10 = "";
        data11 = "";data12 = "";data13 = "";data14 = "";data15 = "";data16 = "";data17 = "";data18 = "";data19 = "";
        if(this.state.response.data != undefined){var data0 = this.state.response.data.data.ids[0];console.log(data0);}
        if(this.state.response.data != undefined){var data1 = this.state.response.data.data.ids[1];console.log(data1);}
        if(this.state.response.data != undefined){var data2 = this.state.response.data.data.ids[2];console.log(data2);}
        if(this.state.response.data != undefined){var data3 = this.state.response.data.data.ids[3];console.log(data3);}
        if(this.state.response.data != undefined){var data4 = this.state.response.data.data.ids[4];console.log(data4);}
        if(this.state.response.data != undefined){var data5 = this.state.response.data.data.ids[5];console.log(data5);}
        if(this.state.response.data != undefined){var data6 = this.state.response.data.data.ids[6];console.log(data6);}
        if(this.state.response.data != undefined){var data7 = this.state.response.data.data.ids[7];console.log(data7);}
        if(this.state.response.data != undefined){var data8 = this.state.response.data.data.ids[8];console.log(data8);}
        if(this.state.response.data != undefined){var data9 = this.state.response.data.data.ids[9];console.log(data9);}
        if(this.state.response.data != undefined){var data10 = this.state.response.data.data.ids[10];console.log(data10);}
        if(this.state.response.data != undefined){var data11 = this.state.response.data.data.ids[11];console.log(data11);}
        if(this.state.response.data != undefined){var data12 = this.state.response.data.data.ids[12];console.log(data12);}
        if(this.state.response.data != undefined){var data13 = this.state.response.data.data.ids[13];console.log(data13);}
        if(this.state.response.data != undefined){var data14 = this.state.response.data.data.ids[14];console.log(data14);}
        if(this.state.response.data != undefined){var data15 = this.state.response.data.data.ids[15];console.log(data15);}
        if(this.state.response.data != undefined){var data16 = this.state.response.data.data.ids[16];console.log(data16);}
        if(this.state.response.data != undefined){var data17 = this.state.response.data.data.ids[17];console.log(data17);}
        if(this.state.response.data != undefined){var data18 = this.state.response.data.data.ids[18];console.log(data18);}
        if(this.state.response.data != undefined){var data19 = this.state.response.data.data.ids[19];console.log(data19);}
        
        return ( 

            <div> 
            <div>id0:<code>{JSON.stringify(data0)}</code></div>
            <div>id1:<code>{JSON.stringify(data1)}</code></div>
            <div>id2:<code>{JSON.stringify(data2)}</code></div>
            <div>id3:<code>{JSON.stringify(data3)}</code></div>
            <div>id4:<code>{JSON.stringify(data4)}</code></div>
            <div>id5:<code>{JSON.stringify(data5)}</code></div>
            <div>id6:<code>{JSON.stringify(data6)}</code></div>
            <div>id7:<code>{JSON.stringify(data7)}</code></div>
            <div>id8:<code>{JSON.stringify(data8)}</code></div>
            <div>id9:<code>{JSON.stringify(data9)}</code></div>
            <div>id10:<code>{JSON.stringify(data10)}</code></div>
            <div>id11:<code>{JSON.stringify(data11)}</code></div>
            <div>id12:<code>{JSON.stringify(data12)}</code></div>
            <div>id13:<code>{JSON.stringify(data13)}</code></div>
            <div>id14:<code>{JSON.stringify(data14)}</code></div>
            <div>id15:<code>{JSON.stringify(data15)}</code></div>
            <div>id16:<code>{JSON.stringify(data16)}</code></div>
            <div>id17:<code>{JSON.stringify(data17)}</code></div>
            <div>id18:<code>{JSON.stringify(data18)}</code></div>
            <div>id19:<code>{JSON.stringify(data19)}</code></div>


</div>
         );
    }
}
 
export default FriendsID;