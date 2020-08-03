import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from './../app/models';
import { ImageSliderComponent } from './shared/components/image-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  channels: Channel[] = [];
  imgSliders: ImageSlider[] = [
  ];
  username = '';
  @ViewChild(ImageSliderComponent) imgSliderRef: ImageSliderComponent;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log('ref', this.imgSliderRef);
  }

  handleSelect(menu: TopMenu): void {
    console.log('menu', menu);
  }
}
