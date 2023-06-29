import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }

  @Input('pkmnBorderCard') borderColor: string; //alias

  

  @HostListener('mouseenter') onMouseEnter() {
    console.log("hereeee");
    this.setBorder(this.borderColor || "#009688");
    console.log(this.borderColor)

  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("HHHHHHHHHH");
    this.setBorder("#f5f5f5");

  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4x ${color}`;
    console.log(this.el.nativeElement.style.border)
  }

}
