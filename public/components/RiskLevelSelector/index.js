var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "./styles"], function (require, exports, react_1, styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    class RiskLevelSelector extends react_1.default.Component {
        constructor(props) {
            super(props);
            this.onChange = this.onChange.bind(this);
        }
        onChange(event) {
            let { onChangeRiskLevel } = this.props;
            var riskLevel = parseInt(event.target.value);
            onChangeRiskLevel(riskLevel);
        }
        render() {
            const { maxRiskLevel } = this.props;
            var defultRiskl = 10;
            const options = [];
            for (let k = 1; k <= maxRiskLevel; ++k) {
                options.push(react_1.default.createElement("option", { key: k, value: k }, k));
            }
            return (react_1.default.createElement("div", { style: styles_1.styles.riskLevelContainer },
                react_1.default.createElement("label", null, "Risk level:"),
                react_1.default.createElement("select", { onChange: this.onChange, defaultValue: defultRiskl }, options)));
        }
    }
    exports.default = RiskLevelSelector;
});
