import React, { Component } from 'react';
import './App.css';
import Particles from './components/Particles/Particles';
import Clarifai, { COLOR_MODEL } from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';



const USER_ID = 'gqtp7xwwqwl2';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '911189aa01ee41438a9bb5ad7fe9b7c7';
const APP_ID = '15a48eaffe964f0d872bf9f3a530e6f9';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
// Change this to whatever image URL you want to process
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

const raw = JSON.stringify({
  "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL
              }
          }
      }
  ]
});

const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    console.log('click');
    fetch("https://api.clarifai.com/v2/models/" 
    + MODEL_ID 
    + "/versions/" 
    + MODEL_VERSION_ID 
    + "/outputs", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }



  render() {
    return (
      <div className="App">
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        
      </div>
    )
  }
}


export default App; 
