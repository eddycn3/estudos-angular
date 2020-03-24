import { Pipe, PipeTransform } from "@angular/core";
import { ValueTransformer } from "@angular/compiler/src/util";

@Pipe({
  name: "camelCase"
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let valor: string = "";

    let values = value.split(" ");

    for (let v of values) {
      valor += this.captilize(v) + " ";
    }

    return valor;
  }

  captilize(v: string) {
    return v.substr(0, 1).toUpperCase() + v.substr(1).toLowerCase();
  }
}
