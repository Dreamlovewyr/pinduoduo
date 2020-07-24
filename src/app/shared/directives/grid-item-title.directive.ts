import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {
  @HostBinding('style.fontSize') @Input() appGridItemTitle = '3rem';
  @HostBinding('style.grid-area') area = 'title';

  constructor(private ele: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    // this.render.setStyle(this.ele.nativeElement, 'grid-area', 'title');
  }

}
