import { Request, Context } from "fw";
export default class Home{
  public static Middlewares = [];
  
  public static Index(R: Request, C: Context) {
    R.OK("Ok");
  }

}
