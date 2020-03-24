import { BrowserModule } from "@angular/platform-browser";
import { NgModule, OnInit, OnDestroy } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app.material.module";
import { NaoEncontradoComponent } from "./nao-encontrado/nao-encontrado.component";
import { AppRoutingModule } from "./app.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./login/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NaoEncontradoComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule
  ],

  exports: [],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
