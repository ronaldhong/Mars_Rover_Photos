import React, { Component } from 'react';

class ImageDisplay extends Component {

  render(){
    console.log("IMG URL",this.props.images);
    let images_style = {
      "textAlign": "center"
    }
    let image_style ={
      "height": 600,
      "width": 600
    }
    return(
      <div style={images_style}>
       {this.props.images.map((image)=>{
         return(
            <img style={image_style} src={image.img_src} key={image.id} alt={image}/>
         )
       })}
      </div>
    )
  }
}
export default ImageDisplay;
