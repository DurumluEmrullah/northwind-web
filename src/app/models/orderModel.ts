export interface Order{
    id:number;
    customerId:number;
    employeeId:number;
    orderDate:Date;
    requiredDate:Date;
    shippedDate:Date;
    shipVia:number;
    freight:number;
    shipName:String;
    shipAddress:String;
    shipCity:String;
    shipRegion:String;
    shipPostalCode:String;
    shipCountry:String;
}