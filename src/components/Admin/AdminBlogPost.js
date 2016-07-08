import React, { Component } from 'react';

class AdminBlogPost extends Component {

  render() {
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="ui icon buttons">
            <button className="ui button"><i className="align left icon"></i></button>
            <button className="ui button"><i className="align center icon"></i></button>
            <button className="ui button"><i className="align right icon"></i></button>
            <button className="ui button"><i className="align justify icon"></i></button>
          </div>
          <div className="ui icon buttons">
            <button className="ui button"><i className="bold icon"></i></button>
            <button className="ui button"><i className="underline icon"></i></button>
            <button className="ui button"><i className="text width icon"></i></button>
          </div>
          <div className="field">
            <label>Text</label>
            <textarea></textarea>
          </div>
          <button class="ui primary button">
            Post
          </button>
          <button class="ui button">
            Discard
          </button>
        </div>
      </div>
    );
  }
}

export default AdminBlogPost;
