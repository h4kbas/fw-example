import { FW, IFWOptions } from "fw";
import { readFileSync } from "fs";
import Controllers from "./Controllers";
const Options: IFWOptions = {
  Cert: readFileSync("./Cert/server-cert.pem"),
  Key: readFileSync("./Cert/server-key.pem"),
  Root: "Home",
  Port: 443,
  Public: __dirname + "/Public",
  Controllers,
  Context: { Version: 1 },
  AllowHTTP1: true,
}

const Site = new FW(Options)