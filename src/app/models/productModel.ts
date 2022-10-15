export interface Product{
    id:number;
    productName:String;
    supplierId:number;
    categoryId:number;
    quantityPerUnit:String;
    unitPrice:number;
    unitsOnOrder:number;
    reorderLevel:number;
    discontinued:number;

}