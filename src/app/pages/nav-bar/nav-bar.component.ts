import { Component, OnInit } from '@angular/core';
import { faFilm,faHome,faGift, faListAlt ,faPhone, faShoppingCart ,faShoppingBasket,faSearch, faCartArrowDown,faBars, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  filmIcon = faFilm;
  faShoppingBasket=faShoppingBasket;
  faShoppingCart=faShoppingCart;
  faSearch=faSearch;
  faCartArrowDown=faCartArrowDown;
  faUserCircle=faUserCircle;
  faHeart=faHeart;
  faBars=faBars;
  faHome=faHome;
  faPhone=faPhone;
  faGift=faGift;
  faListAlt=faListAlt;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(){
    // console.log(page)
    this.router.navigateByUrl('/products')
  }

  showProfile(){
    //for now show logout button
  }

  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/mainDesk/login']);
  }

}
