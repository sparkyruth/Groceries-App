import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import {veg_products, fruit_products, meat_products, dairy_products, baked_products} from '../../utils/constants'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts:any
  category_products:any
  shuffled_products:any
  constructor() { }

  ngOnInit(): void {
    console.log(typeof veg_products)
    //create an array and push all the products
    this.allProducts=[]
    // this.allProducts.push(veg_products,fruit_products, meat_products, dairy_products, baked_products)
    this.allProducts.push(...veg_products,...fruit_products, ...meat_products,...dairy_products,...baked_products)
    console.log(this.allProducts, typeof this.allProducts);
    this.shuffled_products = this.allProducts.sort( () => .5 - Math.random() )
    console.log(this.shuffled_products)     
    
  }

}
