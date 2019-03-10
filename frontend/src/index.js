import React, { Component } from 'react';
import { render } from 'react-dom';
import zingchart from 'zingchart'
// Currently testing Boba object creation
// Each Boba object should be rendered in a radar type zingchart

// DEFAULT_BOBA is the basic boba object used for testing
const DEFAULT_BOBA = {
  myReview: {
    tapiocaQuality: 0,
    sweetness: 100,
    teaFlavor: 50,
    fruitFlavor: 50,
    overallValue: 50,
    aesthetic: 123,
  },
  orderName: "ORDER NAME",
  bobaShop: "TAKE YOU TO THE BOBA SHOP"
}

// A slider for each boba review criteria
// Should have a slider, criteria label, and value label that updates with new selection
class BobaSlider extends Component {
  state = {
    value: 0,
    name: this.props.name || "name"
  }
  // Updates text display of the slider value.  
  updateValue() {
    let slider = document.getElementById("example-slider");
    this.setState({ value: slider.value });
  }

  render() {

    return (
      <div>
        <label for="example-slider">{this.state.name}</label>
        <input id="example-slider" onInput={this.updateValue.bind(this)} type="range" min="1" max="10" class="slider"></input>
        <p>Value: <span id="slider-value" >${this.state.value}</span></p>
      </div>
    );
  }
}

class 
class MyBoba extends Component {
  state = DEFAULT_BOBA
  // getBobaDetails () {
  //   this.state.orderName="GIMME BOBBBBAAAAA";
  // }

  render() {
    // this.state.orderName="GIMME BOBBBBAAAAA";

    return (
      <div>
        <h1>This is where my boba Object will go.</h1>
        <h3>{Object.values(this.state.myReview).join(",")}</h3>
        <h2>{this.state.orderName}</h2>
        <h2>{this.state.bobaShop}</h2>
      </div>
    );
  }
}

render(
  <div>
    <MyBoba />
    <BobaSlider name="Sweetness"/>
    <BobaSlider name="Tapioca Quality"/>
    <BobaSlider name="Tea Flavor"/>
    <BobaSlider name="Overall Value"/>
    <BobaSlider name="Aesthetic"/>
    <BobaSlider name="Fruit Flavor"/>
  </div>,
  document.getElementById('root')
);


var myConfig = {
  "type": "radar",
  "plot": {
    "aspect": "area",
    "animation": { "effect": 3 }
  },
  "scale-k": {
    "labels": ["sweetness", "Tapioca Quality", "Tea Strength", "Value", "Aesthetic", "Fruit Flavor"]
  },
  "series": [
    {
      "values": [59, 30, 65, 34, 40, 60]
    }
  ]
};

// myConfig["series"][0]["values"]=[100,100,100,100,100,100];
zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: '100%',
  width: '100%'
});
