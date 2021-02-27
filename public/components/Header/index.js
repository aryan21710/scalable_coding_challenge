var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "./styles"], function (require, exports, react_1, styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    const index = () => (react_1.default.createElement("div", { style: styles_1.styles.headerContainer },
        react_1.default.createElement("h4", { style: styles_1.styles.header }, "FRONTEND CODING CHALLENGE")));
    exports.default = index;
});
