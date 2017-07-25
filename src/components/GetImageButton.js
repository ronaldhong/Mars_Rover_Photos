import React, { Component } from 'react';


class GetImageButton extends Component {
  render(){
    let submit_style ={
      "background-color": "white",
    }
    let submit_div={
      "margin": 15,
      "textAlign": "center"
    }
    return(
      <div style={submit_div} className="submit_button">
        <button style={submit_style} onClick={this.props.onClick}>Get Rover Images</button>
      </div>
    )
  }
}
export default GetImageButton;
