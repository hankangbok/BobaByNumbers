import React, { Component } from 'react';
import { render } from 'react-dom';
// import zingchart from 'zingchart';
// import BobaSlider from './components/bobaSlider';
import BobaForm from './components/bobaForm';
// import { SingleReview } from './components/myChart';
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
class MyBoba extends Component {
  state = DEFAULT_BOBA;
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

// render(
//   <div>
//     <MyBoba />
//     <BobaSlider name="Sweetness" id="sweetness"/>
//     <BobaSlider name="Tapioca Quality" id="tapioca-quality"/>
//     <BobaSlider name="Tea Flavor" id="tea-flavor"/>
//     <BobaSlider name="Overall Value" id="overall-value"/>
//     <BobaSlider name="Aesthetic" id="aesthetic" />
//     <BobaSlider name="Fruit Flavor" id="fruit-flavor" />
//   </div>,
//   document.getElementById('root')
// );
render(
  <div>
    <MyBoba />
    <BobaForm />
  </div>,
  document.getElementById('root')
);
// const mySeriesValues = [59, 30, 65, 34, 40, 60];


// var myConfig = {
//   "type": "radar",
//   "plot": {
//     "aspect": "area",
//     "animation": { "effect": 3 }
//   },
//   "scale-k": {
//     "labels": ["sweetness", "Tapioca Quality", "Tea Strength", "Value", "Aesthetic", "Fruit Flavor"]
//   },
//   "series": [
//     {
//       "values": mySeriesValues
//     }
//   ]
// };

// // myConfig["series"][0]["values"]=[100,100,100,100,100,100];
// zingchart.render({
//   id: 'myChart',
//   data: myConfig,
//   height: '100%',
//   width: '100%'
// });
