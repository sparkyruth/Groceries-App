import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { faFilm, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username = '';
  filmIcon = faFilm;
  faShoppingCart=faShoppingCart;
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
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/mainDesk/login']);
  }

}
