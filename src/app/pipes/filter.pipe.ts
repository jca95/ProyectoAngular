import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
   /* transform(value:any,arg:any):any{
        const result=[];
        for(const i of value){
            console.log()
         if(i.name.indexOf(arg)>-1){
            result.push(i);
         };
           
        };
        return result;
    }*/

    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        searchText= searchText.trim();
        return items.filter(item => {
          return item.name.toLowerCase().trim().includes(searchText);
        });
    }
    
}