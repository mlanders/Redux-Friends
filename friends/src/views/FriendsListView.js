import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
// import Friend from '../components/Friend';
import { Link } from 'react-router-dom';

export class FriendsListView extends Component {
	componentDidMount() {
		this.props.getFriends();
	}

	render() {
		return (
			<>
				{this.props.isLoading ? <p>loading ...</p> : null}
				{this.props.error ? <p>Connection error, try again.</p> : null}

				{this.props.friends && (
					<div className="friends">
						{this.props.friends.map(singleFriend => (
							<Link to={`/friend/${singleFriend.id}`}>
								{singleFriend.name}
							</Link>
						))}
					</div>
				)}
			</>
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
