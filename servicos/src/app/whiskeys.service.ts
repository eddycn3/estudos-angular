import { Injectable } from "@angular/core";
import { LogserviceService } from "./logservice.service";

@Injectable({
  providedIn: "root"
})
export class WhiskeysService {
  whiskeys: string[] = [];

  constructor(private logService: LogserviceService) {}

  getWhiskeys() {
    return this.whiskeys;
  }

  addWhiskey(value: string) {
    this.whiskeys.push(value);
    this.logService.log(`whiskey added ${value}`);
  }
}
