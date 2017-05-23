
import { Item } from '../item/item';
//import { Base } from '../base/base';

export class ShoppingList {
    Id: number;
    Date: Date;
    Items: Item[]
    constructor(id: number, date: Date, items: Item[]){
        this.Id = id;
        this.Date = date;
        this.Items = items;
    }
}
