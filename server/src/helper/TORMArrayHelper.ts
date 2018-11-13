export class TORMArrayHelper {

  public static AdapterStringArray(arr: string[]): string[] {
    let retorno: string[];
    if (arr == null) {
      retorno = ["{}"];
    } else if (arr.length == 1) {
      retorno = [`{${arr[0]}}`];
    } else {
      arr[0] = `{${arr[0]}`;
      arr[arr.length - 1] = `${arr[arr.length - 1]}}`;
      retorno = arr;
    }
    return retorno;
  }
}