import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupbypipe'
})
export class GroupbypipePipe implements PipeTransform {

  transform(collection: any[], property: number): any[] {
        // prevents the application from breaking if the array of objects doesn't exist yet
        if(!collection) {
            return null;
        }

        const groupedCollection:any = collection.reduce((previous, current)=> {
            if(!previous[current[property]]) {
                previous[current[property]] = [current];
            } else {
                previous[current[property]].push(current);
            }

            return previous;
        }, {});

        // this will return an array of objects, each object containing a group of objects
        return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
    }

}