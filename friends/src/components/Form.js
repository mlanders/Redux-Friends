import React from 'react';

function Form(props) {
	return (
		<div>
			<form onSubmit={(e) => props.handleAddFriend(e)}>
				<input
					onChange={e => props.handleChange(e)}
					name="name"
					value={props.name}
					placeholder="Name"
				/>
				<input
					onChange={e => props.handleChange(e)}
					name="age"
					value={props.age}
					placeholder="Age"
				/>
				<input
					onChange={e => props.handleChange(e)}
					name="email"
					value={props.email}
					placeholder="Email"
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default Form;
