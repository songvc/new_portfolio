import React, { Component } from 'react';
import { connect } from 'react-redux';

// Higher Order Component that wraps regular components for requiring authentication
// Input Components that need for authorized access

export default function requireAuthentication(Component) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        // if user is not authenticated, redirect them to index
        this.context.router.push('/admin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/admin');
      }
    }
    render () {
      return <Component {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
