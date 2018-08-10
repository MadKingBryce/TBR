import React, { Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

var library = "https://docs.google.com/spreadsheets/d/1K9Iv-Fc2PmHbCzGHt7k5n-ULK3TTj7zSClL3i-REAPw/edit";

class TheLibrary extends Component {
    render() {
      return (
        <div>
            <Jumbotron>
              <div>  
              
                <br/>
                <a href={library}> FORBIDDEN LIBRARY </a>
              </div>
            </Jumbotron>
            
        </div>
      );
    }
  }
  
  export default TheLibrary;
  