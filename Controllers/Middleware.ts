import { Request, Context } from "fw";
import Msg from "../Middlewares/Msg";

export default class Middleware{

  public static Middlewares = [Msg];


  public static Test(R: Request, C: Context) {
    R.OK(C.Msg);
  }
}
