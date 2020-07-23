import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ElementRef, QueryList, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';
import { ImageSlider } from './../../../models';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.less']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;

  @ViewChild('imageSlider', { static: true }) imageRef: ElementRef;
  @ViewChild('img', { static: true }) imgs: QueryList<ElementRef>;

  selectedIndex = 0;
  intervalId;

  constructor(private rd2: Renderer2) { }

  ngOnInit(): void {
    console.log('imageRef', this.imageRef);
    this.imageRef.nativeElement.innerHtml = `<span> hello </span>`;
  }

  ngAfterViewInit(): void {
    console.log('imageRef', this.imgs);

    // angular 不推荐直接操作dom，防止xss攻击，防止用户注入恶意代码时破坏程序
    // 推荐使用 render2
    if (this.imgs) {
      this.imgs.forEach(item => {
        this.rd2.setStyle(item.nativeElement, 'height', '100px');
      });
    }
    this.intervalId = window.setInterval(() => {
      this.rd2.setStyle(this.imageRef.nativeElement, 'scrollLeft', (this.getIndex(++this.selectedIndex) % this.sliders.length) *
        (this.imageRef.nativeElement.scrollWidth / this.sliders.length));
    }, this.intervalBySeconds * 1000);
  }

  getIndex(index: number): number {
    return index > 0 ? (index % this.sliders.length) :
      this.sliders.length - (Math.abs(index) % this.sliders.length);
  }

  handleScroll(e: any): void {
    const ratio = e.target.scollLeft / (e.target.scorllWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalId);
  }

}
