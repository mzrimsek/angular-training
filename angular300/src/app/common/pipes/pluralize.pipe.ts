import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pluralize' })
export class PluralizePipe implements PipeTransform {
  transform(value: number, singularWord: string, pluralWord: string): string {
    if (value === 0 || value > 1) {
      return pluralWord;
    }
    return singularWord;
  }
}
