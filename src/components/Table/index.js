import React from 'react';
import PropTypes from 'prop-types';
import { calculateTimeSeries } from '../../common/utils';
import { styles } from './styles';
import GridDisplay from './GridDisplay';

const Table = ({ riskLevel,cone }) => {

	var timeSeries = calculateTimeSeries({
		mu: cone.mu,
		sigma: cone.sigma,
		years: 10,
		initialSum: 10000,
		monthlySum: 200,
		fee : 0.01,
    });

	return (
		<div style={styles.gridContainer}>
			<GridDisplay timeSeries={timeSeries}/>
		</div>
	);
};

Table.defaultProps = {
	riskLevel: 3,
};

Table.propTypes = {
	riskLevel: PropTypes.number,
};

export default Table;
