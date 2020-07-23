import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider } from './../app/models';
import { ImageSliderComponent } from './shared/components/image-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  topMenus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },
    {
      title: '男装',
      link: ''
    },
    {
      title: '百货',
      link: ''
    },
    {
      title: '运动',
      link: ''
    },
    {
      title: '手机',
      link: ''
    },
    {
      title: '家纺',
      link: ''
    },
    {
      title: '食品',
      link: ''
    },
    {
      title: '电器',
      link: ''
    },
  ];
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
