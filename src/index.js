import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from './Data/Data';
import PieChartGraph from './PieChart/PieChart';
import * as serviceWorker from './serviceWorker';
import store from './BLL/store';
import logo from './assets/images/logo-retina.png';
import NavItem from './NavItem/NavItem';

class App extends React.Component {
	constructor() {
		super(...arguments);

		this.state = {
			route: window.location.hash.substr(1)
		};
	}

	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			});
		});
	}
	render() {
		let Child;
		switch (this.state.route) {
			case '/data':
				Child = Data;
				break;
			case '/graphic':
				Child = PieChartGraph;
				break;
			default:
				Child = Data;
		}
		return (
			<div className="App">
				<header className="header">
					<nav className="nav">
						<div className="nav-wrapper">
							<img src={logo} alt="logo" className="nav-logo" />
							<ul id="menu-main-nav" className="nav-menu">
								<NavItem path="#/data" url={this.state.route} icon={<i className="far fa-file" />} />
								<NavItem
									path="#/graphic"
									url={this.state.route}
									icon={<i className="fas fa-chart-pie" />}
								/>
							</ul>
						</div>
					</nav>
				</header>
				<Child data={store.getState().dataPage.fieldData} />
			</div>
		);
	}
}

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById('root')
	);
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
