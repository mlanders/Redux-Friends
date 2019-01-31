import React from 'react';
// import {  Link } from 'react-router-dom';

function Friend(props) {
	let currentFriend = props.friends.find(
		friend => friend.id.toString() === props.match.params.id
	);

	if (!currentFriend)
		return (
			<div className="notFriend">
				<h2>Cannot find that friend!</h2>
			</div>
		);
	return (
		<div className="Friend">
			<p>{`test ${currentFriend.name}`}</p>
			<p>Age: {currentFriend.age}</p>
			<p>Email: {currentFriend.email}</p>
		</div>
	);
}

export default Friend;
