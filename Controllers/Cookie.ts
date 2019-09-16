import { Request, Context } from "fw";

export default class Cookie{

  public static Middlewares = [];


  public static Toggle(R: Request, C: Context) {
    if("deneme" in R.Cookies){
      R.RemoveCookie("deneme");
    }
    else{
      R.Cookie("deneme", "Hello World");
    }
    R.OK(JSON.stringify(R.Cookies));
  }
}
