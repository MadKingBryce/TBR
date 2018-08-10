import React, { Component} from 'react';
import {Footer, Col, Row, Container} from 'mdbreact';
var myStyle = {
    background: "gray"
  }

class TheFoot extends Component {
  render() {
    return (
      <Footer>
          <Container >
            <Row style={myStyle}>
                <Col sm="3">
                    <h5 className="title">Special Thanks:</h5>
                    <p>We give specia thanks to u/MadKingBryce for his undying awesomeness and unquestionable genius</p>
                </Col>
                <Col sm="3">
                    <h5 className="title">Our Subreddits</h5>
                    <ul>
                    <li className="list-unstyled"><a href="http://reddit.com/r/Chomsky">r/Chomsky</a></li>
                    <li className="list-unstyled"><a href="http://reddit.com/r/BreadTube">r/BreadTube</a></li>
                    <li className="list-unstyled"><a href="http://reddit.com/r/ChappoTrapHouse">r/ChappoTrapHouse</a></li>
                    <li className="list-unstyled"><a href="http://reddit.com/r/The_Donald">r/The_Donald</a></li>
                    </ul>
                </Col>
                <Col sm="3">
                    <h5 className="title">Contact Us</h5>
                    <ul>
                    <li className="list-unstyled"><a href="#!">Don't </a></li>
                    <li className="list-unstyled"><a href="#!">Ever</a></li>
                    <li className="list-unstyled"><a href="#!">Contact</a></li>
                    <li className="list-unstyled"><a href="#!">Us</a></li>
                    </ul>
                </Col>
                <Col sm="3">
                    <h5 className="title">About</h5>
                    <ul>
                    <li className="list-unstyled"><a href="#!"> Anarchy</a></li>
                    <li className="list-unstyled"><a href="#!"> Socialism </a></li>
                    <li className="list-unstyled"><a href="#!"> Communism</a></li>
                    <li className="list-unstyled"><a href="#!">Fascism</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
         
     </Footer>
    );
  }
}

export default TheFoot;
