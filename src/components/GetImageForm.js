import React, { Component } from 'react';
import GetImageButton from './GetImageButton'
import ImageDisplay from './ImageDisplay'
let API_KEY = "RTn9xDJoPTy73Nl912sgAuJaCV6XtAvMnfDgFcNa";
//https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&camera=FHAZ&api_key=RTn9xDJoPTy73Nl912sgAuJaCV6XtAvMnfDgFcNa
class GetImageForm extends Component {
  constructor(props){
    super(props);
    this.state={
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
    }
    console.log("STATE",this.state);
    this.handleRover=this.handleRover.bind(this);
    this.handleCamera=this.handleCamera.bind(this);
    this.handleSol=this.handleSol.bind(this);
    this.fetchRoverImage= this.fetchRoverImage.bind(this)
  }

  handleRover(event){
    this.setState({
      rover: event.target.value
    })
    console.log("rover", this.state.rover);
  }

  handleCamera(event){
    this.setState({
      camera: event.target.value
    })
    console.log("camera",this.state.camera);
  }

  handleSol(event){
    this.setState({
      sol: event.target.value
    })
    console.log("sol", this.state.sol);
  }
  fetchRoverImage(event){
    event.preventDefault()
    this.setState({
      rover: this.state.rover,
      camera: this.state.camera,
      sol: this.state.sol
    })
    let cam = this.state.camera
    let rove = this.state.rover
    let num = this.state.sol
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`
    console.log("IMGURL",imageUrl);
    fetch(imageUrl)
    .then(results => results.json())
    .then(Data => {
      console.log("DATA",Data.photos);
      this.setState({
        images: Data.photos
      })
    })
  }


  render(){
    let form_styles={
      "textAlign": "center"
    }
    let rover_style={
      "textAlign": "center"
    }
    return(
      <div className="form">
        <div className="background_img"></div>
        <h1>Mars Rover Photo App</h1>
        <form style={form_styles} className="form-content">
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.rover}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.camera}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
          <GetImageButton  onClick={this.fetchRoverImage} />
        </form>
        <h3 id="rover_name"style={rover_style}>{this.state.rover}</h3>
        <ImageDisplay images={this.state.images} />
        <footer>Designed by Ronald S. Hong</footer>
    </div>
    )
  }
}

export default GetImageForm;
