import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Emoji, Confirmable } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.less']
})
export class HorizontalGridComponent implements OnInit {
  private _username: string;

  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(name: string) {
    this._username = name;
    this.userInput.emit(name);
  }

  @Output()
  userInput = new EventEmitter<string>();

  @Emoji()
  result = 'hello';

  constructor() { }

  ngOnInit(): void {
  }

  @Confirmable('确认执行吗？')
  handleClick(): void {
    console.log('已执行！');
  }

}
