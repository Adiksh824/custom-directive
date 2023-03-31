import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRoundBlack]'
})
export class RoundBlackDirective implements OnInit {
  @Input()
  appRoundBlack!: string;
  constructor(private renderer: Renderer2, private elmRef: ElementRef) {
    
  }
  ngOnInit() {
    let roundVal = `${this.appRoundBlack}`;
    
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', '100px');
    // this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', roundVal);
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'red');
  }
}
