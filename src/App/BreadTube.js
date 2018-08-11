import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import YouTube from 'react-youtube';
class TheBreadTube extends Component {
    render() {
      return (
        <div>
          <h3> Chomsky Stuff </h3>
          <br/>
          <div>
              <Jumbotron>
              <div>  
                <h4> Government In The Future </h4>
                <br/>
                <YouTube videoId="SnfioOtrBro"> Youtube Video </YouTube>
                

              </div>
          </Jumbotron>
          <Jumbotron>
              <div>  
                <h4> Government In The Future </h4>
                <br/>
                <YouTube videoId="9DvmLMUfGss"> Youtube Video </YouTube>
              </div>
          </Jumbotron>
          <Jumbotron>
              <div>  
                <h4> Government In The Future </h4>
                <br/>
                <YouTube videoId="XVzvlKrYWaQ"> Youtube Video </YouTube>
              </div>
          </Jumbotron>
          <Jumbotron>
              <div>  
                
                <br/>
                Youtube Video 
              </div>
          </Jumbotron>
          <br/>
          <br/>
          <h3> Title Heading </h3>
          <br/>
          <Jumbotron>
              <div>  
                
                <br/>
                Youtube Video 
              </div>
          </Jumbotron>
          <Jumbotron>
              <div>  
                
                <br/>
                Youtube Video 
              </div>
          </Jumbotron>
          </div>
        </div>
      );
    }
  }
  
  export default TheBreadTube;
  