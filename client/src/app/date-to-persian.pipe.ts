import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';


@Pipe({
  name: 'dateToPersian'
})
export class DateToPersianPipe implements PipeTransform {

  transform(value: any) {

    let MomentDate = moment(value, 'YYYY/MM/DD');
    
    return MomentDate.locale('fa').format('YYYY/M/D');
    
  }

}
