import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a feature...</div>);
        }
        if (this.props.user.feature === 'text') {
          return(<p> "This is new text!" </p>);
        } else {
          return (<button type="button">New Button!</button>);
        }
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
