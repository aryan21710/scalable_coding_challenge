import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJs } from 'chart.js';
import { calculateTimeSeries1 } from '../../common/utils';
import { useFetchConesApi } from '../../customHooks/useFetchConesApi';
import cones from './../../../cones.json';
import RiskLevelSelector from '../RiskLevelSelector';
import { styles } from './styles';


const Chart = () => {
    // const [cone, setCone] = useState({});
    const [riskLevel, setRiskLevel] = useState<number>(3);
    const canvasRef = useRef(null);
    const onChangeRiskLevel = newRiskLevel => setRiskLevel(newRiskLevel);
    // useFetchConesApi(setCone, riskLevel);
    useEffect(()=>{
        drawChart();
    }, []);

    const drawChart = () => {
        const { mu, sigma } = cones.filter(cone => cone.riskLevel == riskLevel)[0];

        const timeSeries = calculateTimeSeries1({
            mu,
            sigma,
            years: 10,
            initialSum: 10000,
            monthlySum: 200,
            fee: 0.01
        });


        const labels = timeSeries.median.map((v, idx) => idx % 12 == 0 ? idx / 12 : '');
        const dataMedian = timeSeries.median.map(v => v.y);
        const dataGood = timeSeries.upper95.map(v => v.y);
        const dataBad = timeSeries.lower05.map(v => v.y);

        const data = {
            datasets: [
                {
                    data: dataGood,
                    label: 'Good performance',
                    borderColor: 'rgba(100, 255, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                },
                {
                    data: dataMedian,
                    label: 'Median performance',
                    borderColor: 'rgba(100, 100, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                },
                {
                    data: dataBad,
                    label: 'Bad performance',
                    borderColor: 'rgba(255, 100, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                }
            ],
            labels
        };

        const options = {
            responsive: false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valuation (EUR)'
                    }
                }]
            }
        };

        const config = {
            type: 'line',
            data,
            options
        };

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const myChart = new ChartJs(context, config);
    };

    return (
        <div style={styles.chartContainer}>
            <RiskLevelSelector onChangeRiskLevel={onChangeRiskLevel} />
            <canvas style={styles.chart}
                ref={canvasRef}
                width={600}
                height={400}
            />
        </div>
    );
};


export default Chart;
