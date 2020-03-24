import { Component, OnInit } from "@angular/core";
import { LoginInfo } from "./login-info";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginInfo: LoginInfo = new LoginInfo();

  myimage = "mybgimage.jpg";

  constructor(private authService: AuthService) {}

  login() {
    this.authService.authUser(this.loginInfo);
    console.log(this.loginInfo);
  }

  ngOnInit() {}
}
