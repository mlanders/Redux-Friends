import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
	return (
		<div>
			<p>
				<Link to={`/friend/${props.friend.id}`}>
					{props.friend.name}
				</Link>
			</p>
		</div>
	);
};

export default Friend;
