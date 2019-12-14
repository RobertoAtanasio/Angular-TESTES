import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogService } from './log.service';
import { Log2Service } from './log2.service';

import { FuncionarioModule } from './funcionario/funcionario.module';

// const criarFuncionarioService = () => {
//   return new FuncionarioService;
//   // return new FuncionarioAbreviadoService (4);
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FuncionarioModule
  ],
  providers: [
    LogService,
    { provide: 'LogPrefixo', useValue: 'LOG'},
    Log2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// providers: [
//   { provide: FuncionarioService, useValue: FuncionarioService },
//   { provide: LogService, useClass: LogService},
//   { provide: 'LogPrefixo', useValue: 'LOG'},
//   Log2Service
// ],
