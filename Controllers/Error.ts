import { Request, Context } from "fw";

export default class Error{

  public static Middlewares = [];

  public static Error(R: Request, C: Context) {
    if (C.Version == 1)
      R.Abort(500);
  }
}
