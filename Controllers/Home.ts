import { Request, Context } from "fw";

export default class Home {

  public static Index(R: Request, C: Context) {
    if (C.Version == 1)
      R.Abort(500);
  }
}