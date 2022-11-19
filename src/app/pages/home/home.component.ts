import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { faFilm, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { veg_products, fruit_products, meat_products, dairy_products, baked_products, about } from '../../utils/constants';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username = '';
  filmIcon = faFilm;
  faShoppingCart=faShoppingCart;
  shuffled_products: any
  category_products: any
  shuffled_categories: any
  showCategory: boolean = false;
  filter_name=""

  categories = [
    { img: "../../../assets/images/categories_header/cat-1.png", name: "Fruits" },
    { img: "../../../assets/images/categories_header/cat-2.png", name: "Veggies" },
    { img: "../../../assets/images/categories_header/cat-4.png", name: "Meat" },
    { img: "../../../assets/images/categories_header/cat-5.png", name: "Baked goods" }

  ]

  about_desc:any
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(
    private userService:UserService,
    private router: Router) { 

      this.userService.getUserName().subscribe((data:any)=>{
        this.username= data.toString()
      }, (err:any)=>{
        this.router.navigate(['/mainDesk/login'])
      })
   
    }

  ngOnInit(): void {
    this.shuffled_categories = this.categories.sort(() => .5 - Math.random())
    this.filter_name="All Products"
    this.about_desc=[]
    this.about_desc=about
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/mainDesk/login']);
  }

  show_category(category: any) {
    console.log(category)
    this.showCategory = true

    if (category === 'Fruits') {
      this.filter_name = "Fruits"
      this.category_products=fruit_products
      console.log(this.category_products, typeof this.category_products, this.filter_name);
      this.router.navigate(['/products', this.filter_name]);
    } else if (category === 'Veggies') {
      this.filter_name = "Vegetables"
      this.category_products=veg_products
      console.log(this.category_products);
      this.router.navigate(['/products', this.filter_name]);
    } else if (category === 'Meat') {
      this.filter_name = "Meat"
      this.category_products=meat_products
      console.log(this.category_products);
      this.router.navigate(['/products', this.filter_name]);
    } else if (category === 'Baked goods') {
      this.filter_name = "Baked Products"

      this.category_products=baked_products
      console.log(this.category_products);
      this.router.navigate(['/products', this.filter_name]);
    }

  }

}
