import React, {Component} from 'react';
import { render} from 'react-dom';

// var myConfig = {
//   "type": "radar",
//   "series": [{
//       "values": [59, 30, 65, 34, 40]
//   }, {
//       "values": [76, 60, 11, 21, 99]
//   }, {
//       "values": [34, 0, 0, 30, 10]
//   }]
// };

// zingchart.render({ 
// id : 'myChart', 
// data : myConfig, 
// height: '100%', 
// width: '100%' 
// });


const DEFAULT_BOBA = {
  myReview : {
    tapiocaQuality:0,
    sweetness:100,
    teaFlavor:23,
    fruitFlavor:14,
    overallValue:53,
    aesthetic:123,
  },
  orderName: "ORDER NAME",
  bobaShop: "TAKE YOU TO THE BOBA SHOP"
}

class MyBoba extends Component {
  state = DEFAULT_BOBA
  render() {
    return (
      <div>
        <h1>This is where my boba will go.</h1>
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
  </div>,
  document.getElementById('root')
);


console.log("WE OUT HERE")