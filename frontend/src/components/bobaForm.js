import React, { Component } from 'react';
import BobaSlider from './bobaSlider';
import zingchart from 'zingchart';

let renderMyChart = (valueList) => {
  console.log(valueList);
  var myConfig = {
    "type": "radar",
    "scale-x": {
      // "auto-fit":"false",
      "min-value":0,
      "max-value":10
    },
    "plot": {
      "aspect": "area",
      "animation": { "effect": 3 }
    },
    "scale-k": {
      "labels": ["sweetness", "Tapioca Quality", "Tea Strength", "Value", "Aesthetic", "Fruit Flavor"]
    },
    "series": [{"values": valueList}]
  };
  
  // myConfig["series"][0]["values"]=[100,100,100,100,100,100];
  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: '90%',
    width: '90%'
  });

}
// const mySeriesValues = [10,4,5,6,7,8];
// renderMyChart(mySeriesValues);


// This form is the holder for 6 boba slider inputs
// Each one for a different criteria of boba review. 
class BobaForm extends Component {
  state = {
    values: [],
    ids: ["sweetness", 
    "tapioca-quality", 
    "tea-flavor", 
    "overall-value", 
    "aesthetic", 
    "fruit-flavor"
    ]
  }

  // Gets the values of all the sliders and appends them to the values state variable
  // WARNING: this function is doing 2 jobs at once right now - decouple ASAP
  fetchValues = () => {
    let newValues = [];
    for (let item=0; item<this.state.ids.length; item++) {
      let current = this.state.ids[item]
      newValues.push(parseInt(document.getElementById(current).value));  
    }
    this.setState({values: newValues});
    // Can I call an outside function to re-render the zingchart based on the 
    // users slider input? 
    renderMyChart(newValues);
  };

  render() {
    return (
      <form>
        <BobaSlider name="Sweetness" id="sweetness" />
        <BobaSlider name="Tapioca Quality" id="tapioca-quality" />
        <BobaSlider name="Tea Flavor" id="tea-flavor" />
        <BobaSlider name="Overall Value" id="overall-value" />
        <BobaSlider name="Aesthetic" id="aesthetic" />
        <BobaSlider name="Fruit Flavor" id="fruit-flavor" />
        <button type="button" onClick={this.fetchValues}>Button</button>
      </form>
    );
  }
}


export default BobaForm;