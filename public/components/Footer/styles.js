define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styles = void 0;
    exports.styles = {
        footerContainer: {
            display: 'flex',
            margin: 0,
            padding: 0,
            position: 'absolute',
            bottom: '0vh',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            height: '3vh',
            background: 'rgba(0,0,0,0.5)'
        },
        text: {
            color: 'rgba(255,255,255,0.8)',
            wordSpacing: '5px'
        }
    };
});
