var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "../components/Menu", "../components/Table", "../components/Chart", "../components/Header", "../components/Footer", "../components/Home", "./styles", "react-router-dom"], function (require, exports, react_1, Menu_1, Table_1, Chart_1, Header_1, Footer_1, Home_1, styles_1, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    Menu_1 = __importDefault(Menu_1);
    Table_1 = __importDefault(Table_1);
    Chart_1 = __importDefault(Chart_1);
    Header_1 = __importDefault(Header_1);
    Footer_1 = __importDefault(Footer_1);
    Home_1 = __importDefault(Home_1);
    const Approutes = () => (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(styles_1.MainContainer, null,
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(Menu_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/table", component: () => react_1.default.createElement(Table_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/chart", component: () => react_1.default.createElement(Chart_1.default, null) })),
            react_1.default.createElement(Footer_1.default, null))));
    exports.default = Approutes;
});
