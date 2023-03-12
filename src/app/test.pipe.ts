import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any): any {

    if(null!==value && !isNaN(value)){
      return value*2;
    }
    else{
      return 'Not a number';
    }
  }

}
