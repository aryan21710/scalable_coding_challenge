var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../assets/images/vault.jpg", "styled-components"], function (require, exports, vault_jpg_1, styled_components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MainContainer = void 0;
    vault_jpg_1 = __importDefault(vault_jpg_1);
    styled_components_1 = __importDefault(styled_components_1);
    exports.MainContainer = styled_components_1.default('div') `
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${vault_jpg_1.default});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
});
