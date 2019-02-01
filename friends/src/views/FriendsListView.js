import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import Friend from '../components/Friend';

export class FriendsListView extends Component {
	componentDidMount() {
		this.props.getFriends();
	}
	render() {
		return (
			<React.Fragment>
				{this.props.isLoading ? <p>loading ...</p> : null}
				{this.props.error ? <p>Connection error, try again.</p> : null}

				{this.props.friends && (
					<div className="friends">
						{this.props.friends.map(friend => (
							<Friend key={friend.id} friend={friend} />
						))}
					</div>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	friends: state.friends,
	error: state.error,
	isLoading: state.isLoading,
});

export default connect(
	mapStateToProps,
	{ getFriends }
)(FriendsListView);
