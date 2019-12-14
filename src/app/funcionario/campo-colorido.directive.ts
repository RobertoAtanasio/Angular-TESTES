import { Directive, HostListener, HostBinding, Input  } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'gray';

  // @Input() cor = 'gray';
  @HostBinding('style.backgroundColor') corDeFundo: string;

  /* constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { } */

  // @HostListener('focus') aoGanharFoco() {
  //   this.corDeFundo = this.cor;
  //   // this.corDeFundo = 'yellow';
  //   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  // }

  // @HostListener('blur') aoPerderFoco() {
  //   this.corDeFundo = 'transparent';
  //   //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  // }

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
  }
}
