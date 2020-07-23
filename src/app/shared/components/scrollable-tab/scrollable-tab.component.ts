import {
  Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';
import { TopMenu } from './../../../models';

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.less']
})

export class ScrollableTabComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterViewChecked {
  title = '拼多多';
  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];

  @Output() menuSelect = new EventEmitter<TopMenu>();

  constructor() { }

  // changes 索引对象, key是属性名，value 是simpleChange
  ngOnChanges(changes: SimpleChanges): void { }

  // 组件初始化完成，这个函数中可以安全的使用组件中的属性和方法
  ngOnInit(): void {
  }

  // 组件内容初始化
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit 被调用');
  }

  // 组件内容脏值检测
  // ngAfterContentChecked(): void {
  //   console.log('AfterContentChecked 被调用');
  // }

  // 组件视图初始化
  ngAfterViewInit(): void { }

  // 组件脏值检测
  ngAfterViewChecked(): void { }

  handleSelectMenu(i: number): void {
    this.selectedIndex = i;
    this.menuSelect.emit(this.menus[i]);
  }

}
