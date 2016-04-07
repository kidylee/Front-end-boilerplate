
import React ,{ Component } from 'react';
import classNames  from 'classnames' ;
import  Plotly from 'plotly.js';
import { connect } from 'react-redux';

class PlotlyComponent extends Component {


  constructor(props){
    super(props);
    this.displayName = 'Plotly';

  }
  

  shouldComponentUpdate(nextProps) {
    //TODO logic for detecting change in props
    return true;
  }

  plotRender(){
    let {data, layout, config} = this.props;
    Plotly.plot(this.container, data, layout, config);
    if (this.props.onClick)
      this.container.on('plotly_click', this.props.onClick);
    if (this.props.onBeforeHover)
      this.container.on('plotly_beforehover', this.props.onBeforeHover);
    if (this.props.onHover)
      this.container.on('plotly_hover', this.props.onHover);
    if (this.props.onUnHover)
      this.container.on('plotly_unhover', this.props.onUnHover);
    if (this.props.onSelected)
      this.container.on('plotly_selected', this.props.onSelected);
  }
  componentDidMount() {
    
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
    if(this.props.autoLayoutReady){
      this.plotRender();
    }
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

const mapStateToProps = (state) => {
  return {
    autoLayoutReady: state.autoLayoutReady
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    
  }
}

export default connect(
  mapStateToProps
)(PlotlyComponent);
