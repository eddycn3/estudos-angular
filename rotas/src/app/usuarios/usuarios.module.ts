import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppMaterialModule } from "../app.material.module";

import { UsuariosComponent } from "./usuarios.component";
import { UsuarioFormComponent } from "./usuario-form/usuario-form.component";
import { UsuarioDetalheComponent } from "./usuario-detalhe/usuario-detalhe.component";
import { UsuariosRoutingModule } from "./usuarios.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsuariosService } from "./usuarios.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    UsuariosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsuariosComponent,
    UsuarioFormComponent,
    UsuarioDetalheComponent
  ],
  providers: [UsuariosService]
})
export class UsuariosModule {}
