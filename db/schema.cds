namespace TableExport;

entity Creation
{
    key ID : UUID;
    Category : String(100);
    Priority : String(100);
    Department : String(100);
    ProductName : String(100);
    DeliveryDate : Date;
    Cost : Decimal;
}
