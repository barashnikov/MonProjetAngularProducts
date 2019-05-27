import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: IProduct[] = [
    { id : 'P100',name : 'Café', unitPrice : 2.5},
    { id : 'P200',name : 'Thé', unitPrice : 2.5},
    { id : 'P300',name : 'Jus d orange', unitPrice : 2.5},
    { id : 'P400',name : 'CocaCola', unitPrice : 2.5}

  ]
  constructor() { }



}
