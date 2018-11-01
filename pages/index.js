//core
import React from "react";
//css && semantic-ui
import "./index.scss";
//others
import { Button, Input, Divider } from "semantic-ui-react";
//import components
import Header from "./components/header.js";
import Slideshow from "./components/slideshow.js";
import Login from "./components/login.js";
import Content from "./components/content.js";
import Lightshow from "./components/lightshow.js";
const IMG = {
  1: {
    url:
      "http://hopineo.org/wp-content/uploads/hopsolutions/Nikon-D810-Image-Sample-6.jpg"
  },
  2: {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Mount_Hood_reflected_in_Mirror_Lake%2C_Oregon.jpg"
  },
  3: {
    url: "http://www.jakubhadrava.cz/images/sigpro/lukova_gallery/4.jpg"
  },
  4: {
    url:
      "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  },
  5: {
    url: "placeholder"
  }
};

var bgOpacity = {
  opacity: "0"
};

class App extends React.Component {
  state = {
    img: IMG,
    style: {
      opacity: 1
    }
  };

  opacity = () => {
    let style = { ...this.state.style };
    style.opacity = style.opacity + 0.05;
    this.setState({
      style
    });
  };

  render() {
    return (
      <div className="main">
        <div />
        <div>
          <div className="under-header">
            <div classname="test">
              <Slideshow img={this.state.img} />
            </div>
          </div>
          <div className="main-row">
            <div className="main-insider">
              <Lightshow />
            </div>
            <div className="main-content">
              {" "}
              <Content />
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
}
export default App;
