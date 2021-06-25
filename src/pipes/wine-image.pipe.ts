import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wineImage'
})
export class WineImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return (value === '') ? 'assets/wine_example.png' : value; 
  }

}
