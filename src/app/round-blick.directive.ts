import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRoundBlick]'
})
export class RoundBlickDirective implements OnInit {
  @Input()
  appRoundBlick!: string;
  constructor(private renderer: Renderer2, private elmRef: ElementRef) {
    
  }
  ngOnInit() {
    let roundVal = `${this.appRoundBlick}`;
    
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', '100px');
    // this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', roundVal);
    // this.renderer.setStyle(this.elmRef.nativeElement, 'border-color', 'green');
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'yellow');
  }

}
