import { Request } from "fw/Request";
import { Context } from "fw/FW";
import Middleware from "fw/Middleware";

export default class Msg implements Middleware {
  public static Before(R: Request, C: Context, Block: Function){
    C.Msg = "Hello";
    //Block();
  }
  public static Fallback(R: Request, C:Context){
    R.OK("This url is restricted");
  }
}