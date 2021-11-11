import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Polly from './components/Polly';
import Transcribe from './components/Transcribe';
import Main from './components/Main';
import Comprehend from './components/Comprehend';
import Rekognition from './components/Rekognition';
import Pixguru from './components/Pixguru';
import Translate from './components/Translate';
import PixguruVideo from './components/PixguruVideo';

//import NavBar from './utilities/navbar';
//import Textract from './components/Textract';

class App extends Component {

  render() {
    return (<Switch>
      <Route exact path='/' component={Main} />
      <Route path='/rolly' component={Polly}/>
      <Route path='/pixguru' component={Pixguru}/>
      <Route path='/transcribe' component={Transcribe}/>
      <Route path='/comprehend' component={Comprehend}/>
      <Route path='/rekognition' component={Rekognition} />
      <Route path='/translate' component={Translate} />
      <Route path='/pixguruvideo' component={PixguruVideo} />
    </Switch>
    )
  }
}

export default App;
