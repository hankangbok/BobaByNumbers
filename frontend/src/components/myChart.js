// A component that renders a single Zingchart
import React, { Component} from 'react';
import zingchart from 'zingchart';

const DEFAULT_VALUES = [59, 30, 65, 34, 40, 60];

export class SingleReview extends Component {
  myConfig = {
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
        "values": DEFAULT_VALUES
      }
    ]
  };

  render () {
    return (
      <div>
        
      </div>
    );
  }
}

