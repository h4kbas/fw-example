import { Request, Context } from "fw";

export default class Home {

  public static Index(R: Request, C: Context) {
    R.Send("Hello World");
  }

  public static File(R: Request, C: Context) {
    R.File("./Public/ex.txt");
  }

  public static Error(R: Request, C: Context) {
    if (C.Version == 1)
      R.Abort(500);
  }
}