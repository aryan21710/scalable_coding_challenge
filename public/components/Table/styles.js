var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "styled-components"], function (require, exports, styled_components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GridContainer = exports.TableContainer = void 0;
    styled_components_1 = __importDefault(styled_components_1);
    exports.TableContainer = styled_components_1.default('div') `
width: 100vw;
height: 80vh;
display: flex;
justifyContent: flex-start;
alignItems: center;
flexDirection: column;
marginTop: 2vh
`;
    exports.GridContainer = styled_components_1.default('div') `
width:70vw;
height:75vh;
marginTop: 2vh;
background: rgba(0;0;0;0.7);
overflow: auto;
marginLeft: auto;
marginRight: auto;
`;
});
