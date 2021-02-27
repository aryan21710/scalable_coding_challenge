var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "react-router-dom", "./styles"], function (require, exports, react_1, react_router_dom_1, styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    class Menu extends react_1.default.Component {
        render() {
            return (react_1.default.createElement("div", { style: styles_1.styles.menuContainer },
                react_1.default.createElement("div", { style: styles_1.styles.innerContainer },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/table" }, "Table-View")),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/chart" }, "Chart-View")))));
        }
    }
    exports.default = Menu;
});
