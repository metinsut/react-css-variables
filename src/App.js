import React, { Component } from 'react';
import image from './Assets/Images/img_forest.jpg';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spacing: '10',
      blur: '10',
      color: '#f1c40f',
    };
  }

  componentDidMount() {
    // this.Input.value = this.state.spacing;
    console.log('====================================');
    console.log(this.img);
    console.log('====================================');
  }


  changeSpaceing(e) {
    this.setState({
      spacing: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Update CSS Variables</h1>
        <div className="controls">
          <div className="spacing" ref='a' >
            <label htmlFor="spacing">Spacing:</label>
            <input type="range" className="spacing" name="spacing" min="10" max="200" defaultValue={this.state.spacing} onChange={(e) => this.changeSpaceing(e)} />
          </div>
          <div className="blur">
            <label htmlFor="blur">Blur:</label>
            <input type="range" className="blur" name="blur" min="0" max="25" defaultValue={this.state.blur} />
          </div>
          <div className="color">
            <label htmlFor="base">Base Color:</label>
            <input type="color" className="color" name="base" defaultValue={this.state.color} />
          </div>
        </div>
        <div className="image" ref={(el) => { this.img = el; }}>
          <img src={image} alt="forest_image" />
        </div>
      </div>
    );
  }
}


export default App;
