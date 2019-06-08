"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Home = /** @class */ (function () {
    function Home() {
    }
    Home.Index = function (R, C) {
        if (C.Version == 1)
            R.Abort(500);
    };
    return Home;
}());
exports.default = Home;
