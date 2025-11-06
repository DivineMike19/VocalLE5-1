import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.css']
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  message: string = '';

  constructor(private auth: Auth) {}

  register() {
    this.auth.register(this.username, this.password, this.firstName, this.lastName).subscribe({
      next: (res) => {
        this.message = 'Registration successful!';
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
      },
      error: (err: any) => {
        let errorMsg = 'Unknown error';
        if (err.error?.message) { errorMsg = err.error.message; }
        else if (err.message) { errorMsg = err.message; }
        else if (typeof err.error === 'string') { errorMsg = err.error; }
        else { errorMsg = JSON.stringify(err); }
        this.message = 'Registration failed: ' + errorMsg;
      }
    });
  }
}
