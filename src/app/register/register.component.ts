import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User=new User('','',0,'');

  constructor(private userservice:UserService,private router:Router)
  {

  }
    saveToDB()
    {
        this.userservice.saveToDB(this.user).subscribe();

        this.router.navigate(['login']);

        sessionStorage.setItem("message","Registration successful. please login now");

    }

}
