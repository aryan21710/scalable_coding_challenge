var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "ag-grid-react", "../../common/constants", "ag-grid-community/dist/styles/ag-grid.css", "ag-grid-community/dist/styles/ag-theme-alpine.css"], function (require, exports, react_1, ag_grid_react_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    const GridDisplay = ({ timeSeries }) => (react_1.default.createElement("div", { id: "myGrid", style: {
            height: '100%',
            width: '70vw',
            color: 'white',
        }, className: "ag-theme-alpine" },
        react_1.default.createElement(ag_grid_react_1.AgGridReact, { columnDefs: constants_1.columnHeaders, rowData: timeSeries, pagination: true, paginationAutoPageSize: true })));
    exports.default = GridDisplay;
});
