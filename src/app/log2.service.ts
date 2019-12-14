import { Injectable } from '@angular/core';

@Injectable()
export class Log2Service {

  constructor( ) { }

  log(msg: string) {
    console.log(msg);
  }

}
