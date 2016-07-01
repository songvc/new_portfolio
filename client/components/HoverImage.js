import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const dimension = {
  container: {
    position: 'relative',
    height: '100%',
    weight: '100%',
    cursor: 'pointer',
    overflow: 'hidden',
    fontFamily: 'Arial',
    backgroundColor: '#17819c'
  },
  overlay: {
    position: 'absolute',
    top: 0, // non-numeric string for motions
    left: 0, // non-numeric string for motions
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: '30px',
    color: 'white',
    fontWeight: 'bold'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  subtitleText: {
    position: 'relative',
    left: '-50%',
    height: '80px', // hoverbox dimensions
    width: '180px', // hoverbox dimensions
    border: '3px solid white'
  },
  image: {
    cursor: 'pointer',
    position: 'relative',
    verticalAlign: 'middle'
  }
}



class HoverImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      isHovering: false
    }
  }

  handleClick() {
    // browserHistory.push(this.props.path);
  }

  handleHover() {
    this.setState({ isHovering: !this.state.isHovering });
  }

  getSpringProps() {
    return {
      defaultStyle: {
        scale: 1.15,
        marginTop: 25,
        imageOpacity: 0.7,
        opacity: 0,
      },
      style:{
        scale: spring(this.state.isHovering ? 1 : 1.15),
        marginTop: spring(this.state.isHovering ? 22 : 25),
        imageOpacity: spring(this.state.isHovering ? 0.4 : 0.7),
        opacity: spring(this.state.isHovering ? 1 : 0)
      },
    };
  }

  render() {

    const { name, src, description } = this.props.data;

    return (
      <div
        style={dimension.container}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}
        onClick={this.handleClick.bind(this)}>
        <Motion {...this.getSpringProps()}>
          {interpolate => {
            let animateImage = {
              transform: `scale(${interpolate.scale})`,
              opacity: interpolate.imageOpacity
            };
            let animateTitle = {
               marginTop: `${interpolate.marginTop}%`
            };
            let animateSubtitle = {
               opacity: interpolate.opacity
            };
           return (
             <div>
               <img
                 style={Object.assign({}, dimension.image, animateImage)}
                 src='http://tympanus.net/Development/HoverEffectIdeas/img/13.jpg'/>
               <div style={dimension.overlay}>
                 <div style={Object.assign({}, dimension.title, animateTitle)}>{name}</div>
                 <div style={Object.assign({}, dimension.subTitle, animateSubtitle)}>
                   <div style={dimension.subtitleText}>{description}</div>
                 </div>
               </div>
             </div>
           );
          }}
        </Motion>
      </div>
    );
  }
}

// <p style={textStyle}>{name}</p>
// <p>{description}</p>
// <img src={src} />


export default HoverImage;
