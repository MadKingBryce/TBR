import React, { Component} from 'react';
import {Container} from 'mdbreact';
import {Jumbotron} from 'react-bootstrap';

var myStyle = {
  font: "5pt"
}

class UpcomingEvents extends Component {
  render() {
    return (
      <div class="col-sm-4">
        
        <Jumbotron>
          <Container> 
                <h4> Upcoming Events </h4>
                <ul>
                    <li> AMA By u/MadKingBryce</li>
                    <li> Declaration of Rights of u/MadKingBryce</li>
                    <li> Ben Shapiro & Jordan Peterson JointAMA</li>
                  </ul>
        </Container>
       </Jumbotron>
      </div>
    );
  }
}

export default UpcomingEvents;
