import React from 'react';
import { Link } from 'react-router';

const divStyle = {

}

const linkStyle = {

}


const divLink = (props) => {
  return (
    <div>
      Hello
      <Link to={props.path}> {props.name} hello </Link>
    </div>
  );
};

export default divLink;
