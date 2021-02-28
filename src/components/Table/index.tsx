import React, { useState } from 'react';
import { calculateTimeSeries } from '../../common/utils';
import { TableContainer,GridContainer } from './styles';
import GridDisplay from './GridDisplay';
import RiskLevelSelector from '../RiskLevelSelector';
import { useFetchConesApi } from '../../customHooks/useFetchConesApi';

const Table = () => {
    const [cone, setCone] = useState<object>({});
    const [riskLevel, setRiskLevel] = useState<number>(3);
    const onChangeRiskLevel:(newRiskLevel: React.SetStateAction<number>) => void = (newRiskLevel: React.SetStateAction<number>) => setRiskLevel(newRiskLevel);

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
        <TableContainer>
            <GridContainer>
                <GridDisplay timeSeries={timeSeries} />
            </GridContainer>
        </TableContainer>
    );
};


export default Table;
