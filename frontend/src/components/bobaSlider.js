import React, {Component} from 'react';

// A slider type input for each boba review criteria
// Each BobaSlider should have a slider input, criteria label, 
// and value label that updates with new selection
class BobaSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      name: this.props.name || "name",
      id: this.props.id 
    }
    this.updateValue = this.updateValue.bind(this);
  
  }
  // Updates text display of the slider value.  
  updateValue() {
    let slider = document.getElementById(this.state.id);
    this.setState({ value: slider.value });
  }

  render() {
// CRITICAL TODO: ALL THE SLIDERS HAVE THE SAME ID, CHANGE IT OR SLIDERS WONT WORK
    return (
      <div>
        <label for={this.state.id}>{this.state.name}</label>
        <input id={this.state.id} onInput={this.updateValue} type="range" min="1" max="10" class="slider"></input>
        <p>Value: <span id="slider-value" >${this.state.value}</span></p>
      </div>
    );
  }
}

export default BobaSlider;