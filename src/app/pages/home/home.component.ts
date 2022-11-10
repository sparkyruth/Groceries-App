import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username = '';
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
