import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingPipe'
})
export class RatingPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    
    
  //  alert('Hi');

    return "material-icons";
  }
    
}
