import React, { Component} from 'react';
import {Footer, Col, Row, Container} from 'mdbreact';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import TheNav from './App/Navbar';
import TheFoot from './App/Footer';
import Home from './App/Home';
import TheNews from './App/News';
import TheBlog from './App/Blog';
import TheLibrary from './App/Library';
import TheBreadTube from './App/BreadTube';

var myStyle = {
  background: "white"
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Container style={myStyle}> 
              <TheNav/>
              
                <div>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/blog" component={TheBlog} /> 
                  <Route exact path="/breadtube" component={TheBreadTube} /> 
                  <Route exact path="/library" component={TheLibrary} />       
                  <Route exact path="/news" component={TheNews} /> 
                </div>
              
          </Container>
          <TheFoot/>
        </div>
      </Router>
    );
  }
  

}

export default App;
