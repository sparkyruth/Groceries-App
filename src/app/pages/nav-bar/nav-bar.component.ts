import { Component, OnInit } from '@angular/core';
import { faFilm,faShoppingBasket,faSearch, faCartArrowDown,faBars, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  filmIcon = faFilm;
  faShoppingBasket=faShoppingBasket
  faSearch=faSearch;
  faCartArrowDown=faCartArrowDown;
  faUserCircle=faUserCircle;
  faHeart=faHeart;
  faBars=faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
