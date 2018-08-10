import React, { Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Footer, Col, Row, Container} from 'mdbreact';
import NewsItem from '../Components/News/NewsBlock';
import RecentStuff from '../Components/Home/Recent';
import UpcomingEvents from '../Components/Home/UpcomingEvents';

var myStyle = {
    background: "black"
  }

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <div>  
              About 5 years ago my family went to visit my sister in LA. One day while we were there I got roped into watching my niece in a hair salon while my sister got her hair done. 
              So I'm sitting in the salon lobby, bored as fuck, watching my niece and who walks in but Noam fucking Chomsky. 
              At first I was kind nervous and frea ked out, I'd just kinda glance at him every now and then, trying not to freak him out. But then my fucking niece starts crying and fidgeting and shit and won't shut up. So I'm trying to keep my niece quiet and not bother Noam, when oops, too late, he gets up and walks over to us. 
              He just smiled and stroked her hair, and asked me what was wrong. I said I didn't know. Then he looked at me with those penetrating blue eyes and simply said in that soothing voice "She seems like she's hungry."
              Then he lifted up his shirt and breastfed my niece right there in the salon lobby. 
              <br/>
              True story.
            </div>
        </Jumbotron>
        <RecentStuff/>
        <UpcomingEvents/>
            
        <RecentStuff/>
      </div>
    );
  }
}

export default Home;
