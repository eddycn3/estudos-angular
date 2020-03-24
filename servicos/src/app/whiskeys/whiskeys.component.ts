import { Component, OnInit } from "@angular/core";
import { WhiskeysService } from "src/app/whiskeys.service";

@Component({
  selector: "app-whiskeys",
  templateUrl: "./whiskeys.component.html",
  styleUrls: ["./whiskeys.component.css"]
})
export class WhiskeysComponent implements OnInit {
  whiskeys: string[] = [];

  preco: string = "12.45";

  constructor(private whiskeysService: WhiskeysService) {}

  ngOnInit() {
    this.whiskeys = this.whiskeysService.getWhiskeys();
  }

  onAddWhiskey(value: string) {
    this.whiskeysService.addWhiskey(value);
  }
}
