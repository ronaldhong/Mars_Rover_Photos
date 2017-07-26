import React, { Component } from 'react';

class ImageDisplay extends Component {

  render(){
    console.log("IMG URL",this.props.images);
    let images_style = {
      "textAlign": "center"
    }
    let image_style ={
      "height": 450,
      "width": 450
    }
    return(
      <div style={images_style} className="imgs_display">
       {this.props.images.map((image)=>{
         return(
            <img className="img" style={image_style} src={image.img_src} key={image.id} alt={image}/>
         )
       })}
      </div>
    )
  }
}
export default ImageDisplay;
