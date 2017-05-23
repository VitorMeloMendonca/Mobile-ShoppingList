import { ItemProduct } from '../itemProduct/itemProduct.model';

export class Item {
    Id: number;
    Date: Date;
    Observation: string;
    Price: number;
    Amount: number;
    ItemProduct: ItemProduct;

    constructor(id: number, observation: string, price: number, amount: number, itemProduct: ItemProduct) {
        this.Id = id;
        this.Date = new Date;
        this.Observation = observation;
        this.Price = price;
        this.Amount = amount;
        this.ItemProduct = itemProduct;
    };

    public cleanItem() {
        return new Item(0, null, 0, 0,
            new ItemProduct(0, null, new Date));
    };
}