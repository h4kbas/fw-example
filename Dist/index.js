"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fw_1 = require("fw");
var fs_1 = require("fs");
var Controllers_1 = __importDefault(require("./Controllers"));
var Options = {
    Cert: fs_1.readFileSync("./Cert/server-cert.pem"),
    Key: fs_1.readFileSync("./Cert/server-key.pem"),
    Root: "Home",
    Port: 443,
    Public: "./Public",
    Controllers: Controllers_1.default,
    Context: { Version: 1 }
};
var Site = new fw_1.FW(Options);
