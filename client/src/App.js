import React from 'react';
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


import Pets from './components/Pets';
import Anime from './components/Anime';
import Current from './components/Current';
import Gaming from './components/Gaming';
import Gardening from './components/Gardening';
import Programing from './components/Programing';
import Random from './components/Random';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Rules from './components/Rules';
import ImageLinkGenerator from './components/ImageLinkGenerator'
import Nav from './Nav';


const App = () => {
 
    return(
      <Provider store = {store}>
      <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/pets"><Pets /></Route>
        <Route exact path="/anime"><Anime /></Route>
        <Route exact path="/current"><Current /></Route>
        <Route exact path="/gaming"><Gaming /></Route>
        <Route exact path="/gardening"><Gardening /></Route>
        <Route exact path="/programing"><Programing /></Route>
        <Route exact path="/random"><Random /></Route>
        <Route exact path="/generator"><ImageLinkGenerator /></Route>
        <Route exact path="/faq"><Faq /></Route>
        <Route exact path="/contact"><Contact /></Route>
        <Route exact path="/rules"><Rules /></Route>
      </Switch>
      </Router>
       </Provider>
    )
    
    
}


function Home(){
  return(
    <div className="main">
    <Nav />
    <div className="main-2">
      <h1 className="text-center">Home</h1>
      <div className="content">
    <h1 className="text-center border-bottom">JuicyPost is an image board site!</h1>
    <p> Click on one the boards on your left to get started</p>
    </div>
    </div>
    </div>
  )
}


export default App;
