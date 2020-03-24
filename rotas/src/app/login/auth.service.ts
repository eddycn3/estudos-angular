import { Injectable, EventEmitter } from "@angular/core";
import { LoginInfo } from "./login-info";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private userIsLogado: boolean = false;

  mostrarMenuEmmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  authUser(loginInfo: LoginInfo) {
    if (loginInfo.user === "eddycn3" && loginInfo.pass === "123321") {
      this.userIsLogado = true;

      this.mostrarMenuEmmitter.emit(true);

      this.router.navigate(["/"]);
    } else {
      this.userIsLogado = false;

      this.mostrarMenuEmmitter.emit(false);
    }
  }

  userAutenticado() {
    return this.userIsLogado;
  }
}
