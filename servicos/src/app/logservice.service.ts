import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LogserviceService {
  constructor() {}

  log(msg: string) {
    console.log(msg);
  }
}
