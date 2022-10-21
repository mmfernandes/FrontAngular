import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastrarFuncionarioComponent } from './components/pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarFuncionarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
