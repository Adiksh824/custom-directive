import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class RoundBlockDirective implements OnInit {
  @Input()
  appRoundBlock!: string;
  constructor(private renderer: Renderer2, private elmRef: ElementRef) {
    
  }
  ngOnInit() {
    let roundVal = `${this.appRoundBlock}`;
    
    this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', '100px');
    // this.renderer.setStyle(this.elmRef.nativeElement, 'border-radius', roundVal);
    // this.renderer.setStyle(this.elmRef.nativeElement, 'border-color', 'green');
    this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'green');
  }
}