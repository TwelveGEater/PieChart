import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from './Data';
import PieChartGraph from './PieChart';
import * as serviceWorker from './serviceWorker';
import store from './store';

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
				<menu className="nav">
					<header>App</header>
					<a href="#/data">Data Page</a> <br />
					<a href="#/graphic">PieChart Page</a>
					<br />
				</menu>
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
