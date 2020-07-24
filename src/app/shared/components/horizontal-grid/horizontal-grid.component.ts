import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';
import { Channel } from '../../../models';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.less']
})
export class HorizontalGridComponent implements OnInit {
  // channels: Channel[] = [];

  // 双向绑定
  // private _username: string;

  // @Input()
  // public get username(): string {
  //   return this._username;
  // }

  // public set username(name: string) {
  //   this._username = name;
  //   this.userInput.emit(name);
  // }

  // @Output()
  // userInput = new EventEmitter<string>();

  // 自定义装饰器
  // @Emoji()
  // result = 'hello';
  sliderMargin = '0';

  @Input() cols = 8;
  @Input() displayCols = 5;

  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }

  public get templateColumns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // 自定义装饰器
  @Confirmable('确认执行吗？')
  handleClick(): void {
    console.log('已执行！');
  }

  handleScroll(e): void {
    this.sliderMargin = `0 ${(100 * e.target.scrollLeft) / e.target.scrollWidth}%`;
  }

}
