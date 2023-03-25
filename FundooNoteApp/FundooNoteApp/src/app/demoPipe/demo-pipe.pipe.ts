import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoPipePipe implements PipeTransform {

  transform(value: any, jsonArray: string) {
    if (jsonArray === ''){
      return value;
    }

    const details = [];
    for(const detail of value){
      if (detail.id.includes(jsonArray)){
        details.push(detail);
      }
    }
    return details;
  }

}
