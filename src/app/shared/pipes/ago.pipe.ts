import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(value: string | number | Date, ...args: unknown[]): unknown {
    if (!value) {
      return null;
    }
    const timeInterval = (+new Date() - +new Date(value)) / 1000;
    if (timeInterval < 30) {
      return '刚刚';
    }

    const intervalUnits = {
      年: 3600 * 24 * 365,
      月: 3600 * 24 * 30,
      日: 3600 * 24,
      小时: 3600,
      分钟: 60,
      秒: 1,
    };

    let counter = 0;
    for (const unitName in intervalUnits) {
      if (intervalUnits.hasOwnProperty(unitName)) {
        counter = Math.floor(timeInterval / intervalUnits[unitName]);
        if (counter > 1) {
          return `${counter}${unitName}前`;
        }
      }
    }
    return value;
  }

}
