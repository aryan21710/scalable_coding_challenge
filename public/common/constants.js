define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.APIURL = exports.columnHeaders = void 0;
    exports.columnHeaders = [
        {
            headerName: 'Month',
            field: 'month',
            sortable: true,
            filter: true,
            resizable: true,
            cellRenderer: 'LinkComponent',
        },
        {
            headerName: 'Good',
            field: 'good',
            sortable: true,
            filter: true,
            resizable: true,
        },
        {
            headerName: 'Median',
            field: 'median',
            sortable: true,
            filter: true,
            resizable: true,
        },
        {
            headerName: 'Bad',
            field: 'bad',
            sortable: true,
            filter: true,
            resizable: true,
        }
    ];
    exports.APIURL = 'http://localhost:3000/api/cones';
});
