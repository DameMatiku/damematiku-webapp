import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initVoting, upvote, downvote, resetVote } from '../../reducers/voting/actionCreators';

class Voting extends Component {

  componentWillMount = () => {
    this.props.init();
  };

  onVoteUp = () => {
    const { vote, resetVote, upvote, accessToken } = this.props;
    vote === 'UP' ? resetVote(accessToken) : upvote(accessToken);
  };

  onVoteDown = () => {
    const { vote, resetVote, downvote, accessToken } = this.props;
    vote === 'DOWN' ? resetVote(accessToken) : downvote(accessToken);
  };

  render() {
    const { score, vote } = this.props;
    return (
      <div>
        <FlatButton label={'Upvote'} onMouseUp={this.onVoteUp} onTouchStop={this.onVoteUp} primary={vote === 'UP'} />
        <b>{score}</b>
        <FlatButton label={'Downvote'} onMouseUp={this.onVoteDown} onTouchStop={this.onVoteDown} primary={vote === 'DOWN'} />
      </div>
    );
  }

}

const mapStateToProps = (state, props) => ({
  accessToken: state.authorization.accessToken,
  voting: state.voting[props.video.id],
  vote: state.voting[props.video.id].vote,
  score: props.video.votes + (!!state.voting[props.video.id] ? state.voting[props.video.id].vote !== 'NONE' ? state.voting[props.video.id].vote : 0)
});

const mapDispatchToProps = (dispatch, props) => ({
  init: (accessToken) => dispatch(initVoting(props.video)),
  upvote: (accessToken) => dispatch(upvote(props.video.id)),
  downvote: (accessToken) => dispatch(upvote(props.video.id)),
  resetVote: (accessToken) => dispatch(resetVote(props.video.id))
});

export default connect()(Voting);
