import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { veg_products, fruit_products, meat_products, dairy_products, baked_products } from '../../utils/constants'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts: any
  filter_name=""
  categories = [
    { img: "../../../assets/images/categories_header/cat-1.png", name: "fruits" },
    { img: "../../../assets/images/categories_header/cat-2.png", name: "veggies" },
    { img: "../../../assets/images/categories_header/cat-4.png", name: "meat" },
    { img: "../../../assets/images/categories_header/cat-5.png", name: "baked" }

  ]
  shuffled_products: any
  category_products: any
  shuffled_categories: any
  showCategory: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //create an array and push all the products
    this.allProducts = []
  this.filter_name="All Products"

    // this.allProducts.push(veg_products,fruit_products, meat_products, dairy_products, baked_products)
    this.allProducts.push(...veg_products, ...fruit_products, ...meat_products, ...dairy_products, ...baked_products)
    this.shuffled_products = this.allProducts.sort(() => .5 - Math.random())
    this.shuffled_categories = this.categories.sort(() => .5 - Math.random())
console.log(typeof this.shuffled_products)
  }

  show_category(category: any) {
    console.log(category)
    this.showCategory = true

    if (category === 'fruits') {
      this.filter_name = "Fruits"
      this.category_products=fruit_products
      console.log(this.category_products, typeof this.category_products, this.filter_name);
    } else if (category === 'veggies') {
      this.filter_name = "Vegetables"
      this.category_products=veg_products
      console.log(this.category_products);
    } else if (category === 'meat') {
      this.filter_name = "Meat"
      this.category_products=meat_products
      console.log(this.category_products);
    } else if (category === 'baked') {
      this.filter_name = "Baked Products"

      this.category_products=baked_products
      console.log(this.category_products);
    }

  }

}
