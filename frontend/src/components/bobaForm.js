import React, { Component } from 'react';
import BobaSlider from './bobaSlider';


class BobaForm extends Component {
  render() {
    return (
      <form>
        <BobaSlider name="Sweetness" id="sweetness"/>
        <BobaSlider name="Tapioca Quality" id="tapioca-quality"/>
        <BobaSlider name="Tea Flavor" id="tea-flavor"/>
        <BobaSlider name="Overall Value" id="overall-value"/>
        <BobaSlider name="Aesthetic" id="aesthetic" />
        <BobaSlider name="Fruit Flavor" id="fruit-flavor" />
        <button name="submit" onSubmit={()=> console.log("button clicked")}>Submit</button>
      </form>
    );
  }
}

export default BobaForm;