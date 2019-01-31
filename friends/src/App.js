import React, { Component } from 'react';
import FriendsListView from './views/FriendsListView';
import Friend from './components/Friend';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends } from './actions';

import './App.css';

class App extends Component {
	componentDidMount() {
		console.log(this.props.friends);

		this.props.getFriends();
	}

	render() {
		return (
			<>
				<Route
					exact
					path="/"
					render={properties => (
						<FriendsListView
							{...properties}
							friends={this.props.friends}
							error={this.props.error}
							isLoading={this.props.isLoading}
						/>
					)}
				/>
				<Route
					exact
					path="/friend/:id"
					render={properties => (
						<Friend {...properties} friends={this.props.friends} />
					)}
				/>
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
)(App);

// export default App;
