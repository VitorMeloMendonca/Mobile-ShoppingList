
import { Item } from '../item/item';
import { Supermarket } from '../supermarket/supermarket.model';
//import { Base } from '../base/base';

export class Purchase {
    Id: number;
    Date: Date;
    Items: Item[];
    Supermarket: Supermarket;
    constructor(id: number, date: Date, items: Item[], supermarket: Supermarket){
        this.Id = id;
        this.Date = date;
        this.Items = items;
        this.Supermarket = supermarket;
    }
}
