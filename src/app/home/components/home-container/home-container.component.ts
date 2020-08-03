import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { TopMenu, ImageSlider } from './../../../../app/models';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.less']
})
export class HomeContainerComponent implements OnInit {
  behavior$: BehaviorSubject<number>;
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

  constructor() {
  }

  ngOnInit(): void {
    this.behavior$ = new BehaviorSubject(0);
    this.behavior$.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    this.behavior$.next(1);
    this.behavior$.next(2);
    this.behavior$.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });
    this.behavior$.next(3);
    this.behavior$.subscribe(val => { console.log('val', val) })
  }

  handleSelect(menu: TopMenu): void {
    console.log('menu', menu);
  }

}
