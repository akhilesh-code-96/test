import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    userName: '',
    password: '',
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    this.http
      .post(
        'https://projectapi.gerasim.in/api/EmployeeManagement/login',
        this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          localStorage.setItem('employeeApp', JSON.stringify(res.data));
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message);
        }
      });
  }
}
