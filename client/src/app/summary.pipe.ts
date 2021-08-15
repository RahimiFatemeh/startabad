import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit? : number){
    if(!value)
      return null
    if(value.length <= 90 )
      return value
    let actualLimit = (limit) ? limit : 90
    return value.substr(0, actualLimit) + '...'
  }

}
