import React, { Component } from 'react';
import FriendsListView from './views/FriendsListView';
import Friend from './components/Friend';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<>
				<Route
					exact
					path="/"
					render={props => <FriendsListView {...props} />}
				/>
				<Route
					exact
					path="/friend/:id"
					render={props => <Friend {...props} />}
				/>
			</>
		);
	}
}

export default App;
