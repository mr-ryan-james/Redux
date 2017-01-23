import React, { Component } from 'react';

import {connect} from 'react-redux';

class CommentList extends Component{

    constructor(props){
        super(props);
    }

    renderComments(){
        return this.props.comments.map((comment)=> {
            return (
                <li key={comment}>{comment}</li>
            );
        });
    }

    render(){
        return (
            <ul className="comment-list">
                {this.renderComments.bind(this)()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList)