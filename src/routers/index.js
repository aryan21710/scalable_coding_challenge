import React from 'react';
import Menu from '../components/Menu';
import RiskLevelSelector from '../components/RiskLevelSelector';
import Table from '../components/Table';
import Chart from '../components/Chart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import { styles } from './styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class Approutes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			riskLevel: 3,
		};
		this.onChangeRiskLevel = this.onChangeRiskLevel.bind(this);
	}

	onChangeRiskLevel(riskLevel) {
		this.setState({ riskLevel });
	}

	render() {
		const { riskLevel } = this.state;
		return (
			<BrowserRouter>
			<div style={styles.mainContainer}>
			<Header/>
					<Menu />
					<RiskLevelSelector onChangeRiskLevel={this.onChangeRiskLevel} />
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/table" component={() => <Table riskLevel={riskLevel} />} />
						<Route path="/chart" component={() => <Chart riskLevel={riskLevel} />} />
					</Switch>
					<Footer/>
				</div>
			</BrowserRouter>
		);
	}
}
