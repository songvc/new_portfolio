import React, { Component } from 'react';
import { spring, Motion } from 'react-motion';

const layout = {
  "position" : "absolute",
  "height": "60px",
  "width": "60px",
  "lineHeight":"60px",
  "margin": "-30px",
  "borderRadius": "28px",
  "textAlign": "center"
}

const style = {
  "color": "#3a4145",
  "backgroundColor": "white",
  "fontFamily": "Futura",
  "fontWeight": "800",
  "fontSize": "36px"
}

class CenterIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  handleHover() {
    this.setState({ isHovering: !this.state.isHovering });
  }

  render() {

    const { top, left } = this.props.position;
    let combinedLayout = { ...layout, "top": top, "left": left };

    return (
      <div style={Object.assign(combinedLayout, style)}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleHover.bind(this)}>
        <Motion defaultStyle={{x: 0}} style={{x: spring((this.state.isHovering)? 360: 0)}}>
          {current => {
            let innerStyle = {
              transform: `rotate(${current.x}deg)`
            }
            return (
              <div style={innerStyle}>VS</div>
            )
          }}
        </Motion>
      </div>
    )
  }
}

export default CenterIcon;
