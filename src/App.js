import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spacing: '20',
      blur: '5',
      color: '#f1c40f',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.img.style.setProperty('padding', `${this.state.spacing}px`);
    this.img.style.setProperty('filter', `blur( ${this.state.blur}px)`);
    this.img.style.setProperty('background-color', this.state.color);
  }

  changeSpaceing(e) {
    this.setState({
      spacing: e.target.value,
    });
  }

  changeBlur(e) {
    this.setState({
      blur: e.target.value,
    });
  }

  changeColor(e) {
    this.setState({
      color: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Update CSS Variables</h1>
        <div className="controls">
          <div className="spacing">
            <label htmlFor="spacing">Spacing:</label>
            <input type="range" className="spacing" name="spacing" min="10" max="200" defaultValue={this.state.spacing} onChange={(e) => this.changeSpaceing(e)} />
          </div>
          <div className="blur">
            <label htmlFor="blur">Blur:</label>
            <input type="range" className="blur" name="blur" min="0" max="25" defaultValue={this.state.blur} onChange={(e) => this.changeBlur(e)} />
          </div>
          <div className="color">
            <label htmlFor="base">Base Color:</label>
            <input type="color" className="color" name="base" defaultValue={this.state.color} onChange={(e) => this.changeColor(e)} />
          </div>
        </div>
        <div className="image" ref={(el) => { this.img = el; }}>
          <img src="/Images/img_forest.jpg" alt="forest_image" />
        </div>
      </div>
    );
  }
}


export default App;
