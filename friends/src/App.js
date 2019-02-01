import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends, addFriend } from './actions';
import FriendsListView from './views/FriendsListView';
import FriendInfo from './components/FriendInfo';
import Form from './components/Form';
import Nav from './components/Nav';

import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			age: '',
			email: '',
		};
	}

	componentDidMount() {
		this.props.getFriends();
	}

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleAddFriend = e => {
		e.preventDefault();
		let newFriend = {
			name: this.state.name,
			age: this.state.age,
			email: this.state.email,
		};
		this.props.addFriend(newFriend);
	};

	render() {
		return (
			<div>
				<Nav />
				<Form
					name={this.state.name}
					age={this.state.age}
					email={this.state.email}
					handleChange={this.handleChange}
					handleAddFriend={this.handleAddFriend}
				/>
				<Route exact path="/" component={FriendsListView} />
				<Route path="/friend/:id" component={FriendInfo} />
			</div>
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
	{ getFriends, addFriend }
)(App);

// export default App;
