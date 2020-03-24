import { Component, OnInit } from "@angular/core";
import { ItemList } from "src/app/ng-for/ItemList";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.css"]
})
export class NgForComponent implements OnInit {
  icons: string[] = ["star", "android", "aspect_radio", "eco"];

  whiskeys: ItemList[] = [
    { icon: this.icons[0], description: "Bulleit Bourbon" },
    { icon: this.icons[1], description: "Glennfidth 12 anos" },
    { icon: this.icons[2], description: "The Famous Grouse" },
    { icon: this.icons[3], description: "Gleenmorangie" }
  ];

  constructor() {}

  ngOnInit() {}
}
