import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { UsuariosComponent } from "./usuarios.component";
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";
import { UsuarioDetalheComponent } from "./usuario-detalhe/usuario-detalhe.component";
import { NaoEncontradoComponent } from "../nao-encontrado/nao-encontrado.component";

const usuariosRoutes = [
  {
    path: "",
    component: UsuariosComponent,
    children: [
      { path: "new", component: UsuarioFormComponent },
      { path: ":id", component: UsuarioDetalheComponent },
      { path: ":id/edit", component: UsuarioFormComponent },
      { path: "naoEncontrado", component: NaoEncontradoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
