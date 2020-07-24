import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() appGridItemImage = '2rem';
  @Input() fitMode = 'cover';

  constructor(private ele: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.ele.nativeElement, 'grid-area', 'image');
    this.render.setStyle(this.ele.nativeElement, 'width', this.appGridItemImage);
    this.render.setStyle(this.ele.nativeElement, 'height', this.appGridItemImage);
    this.render.setStyle(this.ele.nativeElement, 'object-fit', this.fitMode);
  }

  @HostListener('click', ['$event.target'])
  handleClick(e): void {
    console.log(e);
  }

}
