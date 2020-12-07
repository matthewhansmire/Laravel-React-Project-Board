import React, { Component } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";

import { connect } from "react-redux";
import { setPerson } from './store/actions';

// Import Routes
import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

// layouts
import MainLayout from "./components/Layout/MainLayout/";
import NonAuthLayout from "./components/Layout/NonAuthLayout";

import "./assets/scss/theme.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
		const obj = JSON.parse(localStorage.getItem("projhubloggedperson"));
		if (obj) {
			this.props.setPerson(obj.person);
		}
	}

	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						{publicRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								exact={route.exact}
								layout={NonAuthLayout}
								component={route.component}
								key={idx}
								isAuthProtected={false}
							/>
						))}

						{authProtectedRoutes.map((route, idx) => (
							<AppRoute
								path={route.path}
								exact={route.exact}
								layout={MainLayout}
								component={route.component}
								key={idx}
								isAuthProtected={true}
							/>
						))}
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		...state
	};
};

export default connect(mapStateToProps, {
	setPerson
})((App));

