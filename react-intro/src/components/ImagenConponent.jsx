import { Component } from "react";

class ImagenComponent extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImagenComponent;
