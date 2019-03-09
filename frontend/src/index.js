import React, {Component} from 'react';
import { render} from 'react-dom';
import zingchart from 'zingchart'


const DEFAULT_BOBA = {
  myReview : {
    tapiocaQuality:0,
    sweetness:100,
    teaFlavor:50,
    fruitFlavor:50,
    overallValue:50,
    aesthetic:123,
  },
  // myReviewAsList: [
  //   this.myReview.sweetness,
  //   this.myReview.tapiocaQuality,
  //   this.myReview.teaFlavor,
  //   this.myReview.overallValue,
  //   this.myReview.aesthetic,
  //   this.myReview.fruitFlavor
  // ],
  orderName: "ORDER NAME",
  bobaShop: "TAKE YOU TO THE BOBA SHOP"
}
console.log(DEFAULT_BOBA.myReviewAsList);

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


var myConfig = {
  "type":"radar",
  "plot":{
    "aspect":"area",
    "animation": {"effect": 3}
  },
  "scale-k": {
    "labels": ["sweetness","Tapioca Quality","Tea Strength","Value","Aesthetic","Fruit Flavor"]
  },
  "series":[
    {
      "values":[59,30,65,34,40,60]
    }
  ]
};

// myConfig["series"][0]["values"]=[100,100,100,100,100,100];
zingchart.render({ 
  id : 'myChart', 
  data : myConfig, 
  height: '100%', 
  width: '100%' 
});
