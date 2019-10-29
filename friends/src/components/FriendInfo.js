import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

const FriendInfo = props => {
	console.log(props);
	if (props.friends === undefined) {
		return <p> i'm so lost</p>;
	}
	let friend = props.friends.find(
		friend => `${friend.id}` === props.match.params.id
	);
	if (!friend) return <h2>Friend might exist</h2>;

	const deleteFriend = e => {
		e.preventDefault();
		props.deleteFriend(friend.id);
		props.history.push('/');
	};

	return (
		<div>
			<div className="Friend">
				<h3>{friend.name}</h3>
				<p>Email: {friend.email} email</p>
				<p>Age: {friend.age}</p>
			</div>
			{/* <button onClick={populateFriends}>update</button> */}
			<button onClick={deleteFriend}>delete</button>
		</div>
	);
};

const mapStateToProps = state => ({
	friends: state.friends,
});

export default connect(
	mapStateToProps,
	{ deleteFriend }
)(FriendInfo);

// import React from 'react';
// import { connect } from 'react-redux';

// const FriendInfo = props => {
// 	let currentFriend = props.friends.find(
// 		friend => `${friend.id}` === props.match.params.id
// 	);

// 	if (!currentFriend)
// 		return (
// 			<div className="lostfriend">
// 				<h2>Cannot find that friend!</h2>
// 			</div>
// 		);

// 	return (
// 		<div className="Friend">
// 			<p>{`test ${currentFriend.name}`}</p>
// 			<p>Age: {currentFriend.age}</p>
// 			<p>Email: {currentFriend.email}</p>
// 		</div>
// 	);
// };
// const mapStateToProps = state => ({
// 	friends: state.friends,
// });
// export default connect(
// 	mapStateToProps,
// 	{}
// )(FriendInfo);
