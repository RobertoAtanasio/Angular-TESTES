import { Injectable } from '@angular/core';

import { Log2Service } from '../log2.service';

@Injectable()
export class FuncionarioService {

  ultimoId = 1;
  funcionarios = [{ id: 1, nome: 'Gabriel' }];

  constructor(private logService: Log2Service) { }

  adicionar(nome: string) {
    this.logService.log(`Adicionando o nome ${nome}`);

    const funcionario = {
      id: ++this.ultimoId,
      nome: nome
    };

    this.funcionarios.push(funcionario);
    console.log(JSON.stringify(this.funcionarios));
    // return this.funcionarios;
  }

  consultar() {
    return this.funcionarios;
  }

}

// export class FuncionarioAbreviadoService extends FuncionarioService {

//   constructor (private numeroCaracteres: number) {
//     super();
//   }

//   adicionar(nome: string) {
//     super.adicionar(nome.substr(0, this.numeroCaracteres) + '...');
//   }

// }
