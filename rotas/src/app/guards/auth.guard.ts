import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../login/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(route);
    console.log(state);

    if (this.authService.userAutenticado()) {
      console.log("canActivate : 'usuario autenticado'");
      return true;
    } else {
      console.log("AuthGuard.canActivate() : 'usuario NÃO autenticado'");
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
