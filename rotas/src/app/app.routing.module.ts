import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { NaoEncontradoComponent } from "./nao-encontrado/nao-encontrado.component";

const appRoutes: Routes = [
  {
    path: "usuarios",
    loadChildren: () =>
      import("./usuarios/usuarios.module").then(m => m.UsuariosModule),
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
