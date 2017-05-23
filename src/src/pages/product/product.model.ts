export class Product {
  Id: number;
  Name: string;
  Date: Date;

  constructor(id: number, name: string, date: Date) {
     this.Id = id;
     this.Name = name;
     this.Date = date;
  }
}