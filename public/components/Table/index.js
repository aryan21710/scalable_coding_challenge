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
define(["require", "exports", "react", "../../common/utils", "./styles", "./GridDisplay", "../../customHooks/useFetchConesApi"], function (require, exports, react_1, utils_1, styles_1, GridDisplay_1, useFetchConesApi_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importStar(react_1);
    GridDisplay_1 = __importDefault(GridDisplay_1);
    const Table = () => {
        const [cone, setCone] = react_1.useState({});
        const [riskLevel, setRiskLevel] = react_1.useState(3);
        const onChangeRiskLevel = (newRiskLevel) => setRiskLevel(newRiskLevel);
        useFetchConesApi_1.useFetchConesApi(setCone, riskLevel);
        var timeSeries = utils_1.calculateTimeSeries({
            mu: cone.mu,
            sigma: cone.sigma,
            years: 10,
            initialSum: 10000,
            monthlySum: 200,
            fee: 0.01,
        });
        return (react_1.default.createElement(styles_1.TableContainer, null,
            react_1.default.createElement(styles_1.GridContainer, null,
                react_1.default.createElement(GridDisplay_1.default, { timeSeries: timeSeries }))));
    };
    exports.default = Table;
});
