export class Product{
    productId: number;
      productSku: string;
      productName: string;
      productPrice: number;
      productShortName: string;
      productDescription: string;
      createdDate: string;
      deliveryTimeSpan: string;
      categoryId: number;
      productImageUrl: string;
      categoryName: string;
      constructor(prodID:number, productSku:string, productName:string,productPrice:number, productShortName:string, productDescription:string,  createdDate:string, deliveryTimeSpan:string, categoryId:number, productImageUrl:string, categoryName:string   ){
        this.productId = prodID;
        this.productSku = productSku;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productShortName = productShortName;
        this.productDescription = productDescription;
        this.createdDate =createdDate;
        this.deliveryTimeSpan =deliveryTimeSpan;
        this.categoryId =categoryId;
this.productImageUrl= productImageUrl;
this.categoryName = categoryName
      }
}