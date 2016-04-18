
import React ,{ Component } from 'react';
import classNames  from 'classnames' ;
import  Plotly from 'plotly.js';
import { connect } from 'react-redux';


class PlotlyComponent extends Component {


  constructor(props){
    super(props);
    this.displayName = 'Plotly';

  }

  handleResize(){
    let update = {
        height: this.container.offsetHeight,
        width: this.container.offsetWidth
      }
      Plotly.relayout(this.container, update);
  }

  handleLayoutChange(){

    Plotly.Plots.resize(this.container);

  }
  shouldComponentUpdate(nextProps) {
    //TODO logic for detecting change in props
    return true;
  }


  plotRender(){


    // let {data, layout, config} = this.props;



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

    layout.height = this.container.parentElement.offsetHeight;
    layout.width = this.container.parentElement.offsetWidth;

    Plotly.plot(this.container, data, layout, config);
    // if (this.props.onClick)
    //   this.container.on('plotly_click', this.props.onClick);
    // if (this.props.onBeforeHover)
    //   this.container.on('plotly_beforehover', this.props.onBeforeHover);
    // if (this.props.onHover)
    //   this.container.on('plotly_hover', this.props.onHover);
    // if (this.props.onUnHover)
    //   this.container.on('plotly_unhover', this.props.onUnHover);
    // if (this.props.onSelected)
    //   this.container.on('plotly_selected', this.props.onSelected);
  }

  componentDidMount() {
    this.plotRender();
  }

  componentDidUpdate() {
    //TODO use minimal update for given changes
    this.container.data = this.props.data;
    this.container.layout = this.props.layout;
    Plotly.redraw(this.container);
  }

  componentWillUnmount() {
    this.container.removeAllListeners('plotly_click');
    this.container.removeAllListeners('plotly_beforehover');
    this.container.removeAllListeners('plotly_hover');
    this.container.removeAllListeners('plotly_unhover');
    this.container.removeAllListeners('plotly_selected');
  }

  render() {
    let {data, layout, config, className, ...other } = this.props;
    const cls = classNames(className,'js-plotly-plot');
    return <div {...other} className={cls} ref={(node) => this.container=node} />
  }
}

PlotlyComponent.propTypes = {
    data: React.PropTypes.array,
    layout: React.PropTypes.object,
    config: React.PropTypes.object,
    onClick: React.PropTypes.func,
    onBeforeHover: React.PropTypes.func,
    onHover: React.PropTypes.func,
    onUnHover: React.PropTypes.func,
    onSelected: React.PropTypes.func
  };


const mapStateToProps = (state, ownPros) => {

  let id = ownPros.id;
  let item =  _.find(state.autoLayout.layout, { i: id})
  console.log(item);

  return {
     item
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    }

}


export default connect(mapStateToProps,null, null , {withRef : true } )(PlotlyComponent)
