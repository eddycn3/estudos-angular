import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WhiskeysComponent } from "./whiskeys/whiskeys.component";
import { CamelCasePipe } from "./pipes/CamelCasePipe";

@NgModule({
  declarations: [AppComponent, WhiskeysComponent, CamelCasePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
