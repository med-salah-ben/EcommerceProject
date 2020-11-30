import React, { Component } from "react";
import caroBack from "../assets/img/sabeur.jpg";
import caroBack2 from "../assets/img/caroBack2.jpg";
import caro3 from "../assets/img/shop1.jpg";
import { Carousel } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <div className="homeContant">
        <div className="caro">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={caroBack} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={caro3} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={caroBack2}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

// export default connect(null, { home })(Home);
export default Home;
