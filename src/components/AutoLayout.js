import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PlotlyComponent from './PlotlyComponent';
import { autoLayoutInit } from '../actions'
import { connect } from 'react-redux';

var ReactGridLayout = require('react-grid-layout');

require('style!css!../style/main.css');
require('style!css!react-grid-layout/css/styles.css');
require('style!css!react-resizable/css/styles.css');



class Grid extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){


  }

  generateDom(item){


    switch(item['type']){
      case 'PLOTLY':
        return ( <PlotlyComponent className="whatever" id={ item['i'] } ref={ item['i'] }/> );
      default:
        return item['i'];
    }

  }

  handleResize(...args){

      if(args[2] && args[2]['i'] && this.refs[args[2]['i']] && this.refs[args[2]['i']].getWrappedInstance().handleResize){
        this.refs[args[2]['i']].getWrappedInstance().handleResize();
      }
  }

  handleLayoutChange(){
    _.map(this.refs,(item) => {
      if(item.getWrappedInstance().handleLayoutChange){
        item.getWrappedInstance().handleLayoutChange();
      }
    });
  }

  render(){


    return (
      <ReactGridLayout onResize={ this.handleResize.bind(this) } onResizeStart={ this.handleResize.bind(this) } onLayoutChange={this.handleLayoutChange.bind(this)}
         onResizeStop={ this.handleResize.bind(this)  }  className="layout" {...this.props.config}>
          { this.props.config.layout.map((item) =>{
              return <div key={ item['i'] }> { this.generateDom(item) } </div>
            })
          }
      </ReactGridLayout>
    )

  }

}

const mapStateToProps = (state, ownPros) => {
  return {
     config: state.autoLayout
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    layoutInit: () => {
      dispatch(autoLayoutInit())
    },
    onResize: () => {
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
  mapStateToProps,
  mapDispatchToProps
)(Grid)



export default AutoLayout
