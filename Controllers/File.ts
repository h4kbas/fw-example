import { Request, Context } from "fw";

export default class File{

  public static Middlewares = [];

  public static Download(R: Request, C: Context) {
    R.File("./Public/ex.xls");
  }
}
