import React, { Component } from 'react';
import { markdown } from 'markdown';

class PostPreview extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content);
    return (
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML}}></div>
      </div>
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML}}></div>
      </div>
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML}}></div>
      </div>
      <div className="col-xs-4">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML}}></div>
      </div>
    )
  }
}

export default PostPreview;
