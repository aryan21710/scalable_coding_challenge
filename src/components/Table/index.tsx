import React, { useState } from 'react';
import { calculateTimeSeries } from '../../common/utils';
import { styles } from './styles';
import GridDisplay from './GridDisplay';
import { useFetchConesApi } from '../../customHooks/useFetchConesApi';

const Table = () => {
    const [cone, setCone] = useState({});
    const [riskLevel, setRiskLevel] = useState(3);
    const onChangeRiskLevel = newRiskLevel => setRiskLevel(newRiskLevel);

    useFetchConesApi(setCone, riskLevel);

    var timeSeries = calculateTimeSeries({
        mu: cone.mu,
        sigma: cone.sigma,
        years: 10,
        initialSum: 10000,
        monthlySum: 200,
        fee: 0.01,
    });

    return (
        <div style={styles.tableContainer}>
            <div style={styles.gridContainer}>
                <GridDisplay timeSeries={timeSeries} />
            </div>
        </div>
    );
};


export default Table;
