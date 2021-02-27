var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "react-dom", "./routers/index", "./index.css"], function (require, exports, react_1, react_dom_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    react_dom_1 = __importDefault(react_dom_1);
    index_1 = __importDefault(index_1);
    react_dom_1.default.render(react_1.default.createElement(index_1.default, null), document.getElementById('root'));
});
