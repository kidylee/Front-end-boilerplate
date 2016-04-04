import React, {Component} from 'react';
import ReactGridLayout, {WidthProvider} from 'react-grid-layout';
import reactDom from 'react-dom';
const Plotly = require('react-plotlyjs');
const AutoReactGridLayout = WidthProvider(AutoReactGridLayout);
require('style!css!react-grid-layout/css/styles.css')
// require('style!css!sass!plotly.js/src/css/style.scss')
export default class AutoLayout extends Component {

  componentDidMount(){
    // Some data omitted for clarity on screen!
    
  }

  render() {
    let data = [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
        x: [1, 2, 3],     // more about "x": #scatter-x
        y: [6, 2, 3],     // #scatter-y
        marker: {         // marker is an object, valid marker keys: #scatter-marker
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
        }
      },
      {
        type: 'bar',      // all "bar" chart attributes: #bar
        x: [1, 2, 3],     // more about "x": #bar-x
        y: [6, 2, 3],     // #bar-y
        name: 'bar chart example' // #bar-name
      }
    ];

    let plotlyLayout = {                     // all "layout" attributes: #layout
      title: 'simple example',  // more about "layout.title": #layout-title
      xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
        title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
      },
      annotations: [            // all "annotation" attributes: #layout-annotations
        {
          text: 'simple annotation',    // #layout-annotations-text
          x: 0,                         // #layout-annotations-x
          xref: 'paper',                // #layout-annotations-xref
          y: 0,                         // #layout-annotations-y
          yref: 'paper'                 // #layout-annotations-yref
        }
      ]
    };

    let config = {
      showLink: false,
      displayModeBar: true
    };

    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 8, h: 6,minW: 2}
    ];

    return (
      <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200} {...layout}>
        <div key={'a'} >a</div>
        <div key={'b'}>b</div>
        <div key={'c'}>
          <Plotly  className="whatever" data={data} layout={plotlyLayout} config={config}/>
        </div>
      </ReactGridLayout>
    )
  }
};

