import React from 'react';
import {Container} from 'mdbreact'

const NewsItem = ({}) =>
    <Container className="col-sm-6 col-md-3">
        <div >
            <div >
                <img src="../../Assets/Haaretz.png" alt="Haaretz"/>
                <div className="stats">
                    <div className="stats-container">
                        <span className="product_price">Story With No Title</span>
                        <span className="product_name">Everything Is Vital</span>
                        <p>Israel shits on Gaza</p>
                    </div>
                </div>
            </div>
        </div>
    </Container>    

export default NewsItem;
