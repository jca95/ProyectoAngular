import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{


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