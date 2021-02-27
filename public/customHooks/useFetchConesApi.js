var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios", "../common/constants"], function (require, exports, axios_1, constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFetchConesApi = void 0;
    axios_1 = __importDefault(axios_1);
    const useFetchConesApi = (setCone, riskLevel) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(constants_1.APIURL);
            if (response) {
                const filteredCone = response.data.filter((cone) => cone.riskLevel === riskLevel)[0];
                response && setCone(Object.assign({}, filteredCone));
            }
        }
        catch (err) {
            alert(err);
        }
    });
    exports.useFetchConesApi = useFetchConesApi;
});
