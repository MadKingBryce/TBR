import React, { Component} from 'react';
import {Container} from 'mdbreact';
import {Jumbotron} from 'react-bootstrap';



class RecentStuff extends Component {
  render() {
    return (
      <div class="col-sm-8">
        <h3> Recent Activity </h3>
        <Jumbotron>
          <Container>
              Sort By:    -     Recent
              <ul>
                  <li> u/MadkingBryce unanimously elected King </li>
                  <li> u/MadkingBryce delcares war on other admins </li>
                  <li> u/MadKingBryce attacks u/TissueBoxesOfFun in apparent power grab</li>
                  <li> u/TissueBoxesOfFun calls out u/MadKingBryce for "Undemocratic activities"</li>
                </ul>
        </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default RecentStuff;
