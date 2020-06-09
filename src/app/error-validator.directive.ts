import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appErrorValidator]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
    '(click)': 'onClick($event)'
  }
})
export class ErrorValidatorDirective implements AfterViewInit {

  @Input() validateError: any; 

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    var d1 = this.elementRef.nativeElement.querySelector('.form-control');
  }

  onInputChange($event) {
    console.log($event);
    var d1 = this.elementRef.nativeElement;
    if (this.validateError.show) {
      d1.insertAdjacentHTML('afterend', `<span class="inline-error">${this.validateError.message}</span>`);
    }
  }

  onClick($event) {
    console.log($event);
  }

}
