import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Feature extends Component {
    componentWillMount() {
        this.props.fetchMessage();
    }

    render() {
        console.log(this.props.disMessage);
        if (!this.props.disMessage) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                {this.props.disMessage + ''}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        disMessage: state.feature.message,
    }
}

export default connect(mapStateToProps, actions)(Feature);