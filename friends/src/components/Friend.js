import React from 'react';
// import {  Link } from 'react-router-dom';

function Friend(props) {
	let currentFriend = props.friends.find(
		friend => friend.id.toString() === prop.match.params.id
	);

	if (!currentFriend)
		return (
			<div className="notFriend">
				<h2>Cannot find that friend!</h2>
			</div>
		);
	return <p>{`test ${currentFriend.name}`}</p>;
}

export default Friend;
