import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PlotlyComponent from './PlotlyComponent';
import { autoLayoutReady } from '../actions'
import { connect } from 'react-redux';
import  Plotly from 'plotly.js';

var ReactGridLayout = require('react-grid-layout');

require('style!css!../style/main.css');
require('style!css!react-grid-layout/css/styles.css');
require('style!css!react-resizable/css/styles.css');



class Grid extends Component {

  constructor(props) {
    super(props);
    
  } 
 
  componentDidMount(){

  	this.props.onLoad();
    this.props.onResize();
  }

  generateDom(){
  	let data = [
      {
        type: 'scatter',  
        x: [1, 2, 3],     
        y: [6, 2, 3],     
        marker: {         
          color: 'rgb(16, 32, 77)' 
        }
      },
      {
        type: 'bar',      
        x: [1, 2, 3],     
        y: [6, 2, 3],     
        name: 'bar chart example' 
      }
    ];
    let layout = {                     
      title: 'simple example',  
      xaxis: {                  
        title: 'time'         
      },
      annotations: [             
        {
          text: 'simple annotation',    
          x: 0,                         
          xref: 'paper',                
          y: 0,                         
          yref: 'paper'                 
        }
      ]
    };
    let config = {
      showLink: false,
      displayModeBar: true
    };

  	return (
  		<div key={'a'} >
		    <PlotlyComponent className="whatever" data={data} layout={layout} config={config} ref={ 'a' }/>
      </div>
		
  	);
  }

  handleResize(...args){
      

      if(this.refs[args[2]['i']] && this.refs[args[2]['i']].handleResize){
        this.refs[args[2]['i']].handleResize();
      }
  }

  handleLayoutChange(){
    _.map(this.refs,(item) => {
      if(item.handleLayoutChange){
        item.handleLayoutChange();
      }
    });
  }

  render(){
      var layout = [
      {i: 'a', x: 0, y: 0, w: 8, h: 6},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
      <ReactGridLayout onResize={ this.handleResize.bind(this) } onResizeStart={ this.handleResize.bind(this) } onLayoutChange={this.handleLayoutChange.bind(this)}
         onResizeStop={ this.handleResize.bind(this)  }  className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        {this.generateDom()}
        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
      </ReactGridLayout>
    )
    
  }
	
}

const mapStateToProps = (state, ownPros) => {

  return {
     
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(autoLayoutReady())
    },
    onResize: () => {
      console.log(this);
      // console.log(ReactDOM.findDOMNode(this.refs.a));
      // const resizing = $('.resizing');

      // let update = {
      //   height: resizing.attr('height'),
      //   width: resizing.attr('width')
      // }
      // Plotly.relayout($('.whatever')[0], update);
    }
  }
}

const AutoLayout = connect(
  undefined,
  mapDispatchToProps
)(Grid)



export default AutoLayout
