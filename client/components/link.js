import React from 'react';
import { Link } from 'react-router';

const divStyle = {

}

const linkStyle = {

}


const divLink = (props) => <p>{props.name}</p>

divLink.propTypes = {
  name: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired
}

export default divLink;
