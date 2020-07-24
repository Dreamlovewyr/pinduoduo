import { Directive, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') templateArea = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';

  constructor(private ele: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    // this.render.setStyle(this.ele.nativeElement, 'display', 'grid');
    // this.render.setStyle(this.ele.nativeElement, 'grid-template-areas', `'image' 'title'`);
    // this.render.setStyle(this.ele.nativeElement, 'place-items', 'center');
    // this.render.setStyle(this.ele.nativeElement, 'width', '4rem');
  }

}
