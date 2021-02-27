var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "chart.js", "../../common/utils", "./../../../cones.json", "../RiskLevelSelector", "./styles"], function (require, exports, react_1, chart_js_1, utils_1, cones_json_1, RiskLevelSelector_1, styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importStar(react_1);
    cones_json_1 = __importDefault(cones_json_1);
    RiskLevelSelector_1 = __importDefault(RiskLevelSelector_1);
    const Chart = () => {
        // const [cone, setCone] = useState({});
        const [riskLevel, setRiskLevel] = react_1.useState(3);
        const canvasRef = react_1.useRef(null);
        const onChangeRiskLevel = newRiskLevel => setRiskLevel(newRiskLevel);
        // useFetchConesApi(setCone, riskLevel);
        react_1.useEffect(() => {
            drawChart();
        }, []);
        const drawChart = () => {
            const { mu, sigma } = cones_json_1.default.filter(cone => cone.riskLevel == riskLevel)[0];
            const timeSeries = utils_1.calculateTimeSeries1({
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
            const myChart = new chart_js_1.Chart(context, config);
        };
        return (react_1.default.createElement("div", { style: styles_1.styles.chartContainer },
            react_1.default.createElement(RiskLevelSelector_1.default, { onChangeRiskLevel: onChangeRiskLevel }),
            react_1.default.createElement("canvas", { style: styles_1.styles.chart, ref: canvasRef, width: 600, height: 400 })));
    };
    exports.default = Chart;
});
