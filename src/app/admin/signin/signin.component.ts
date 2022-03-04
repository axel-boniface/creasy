import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent {
  login = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  error: string ='';

  private get user() {
    return this.login.get('user').value;
  }

  private get password() {
    return this.login.get('password').value;
  }

  constructor(
    private signinService: AuthenticationService,
    private router: Router,
  ){}

  ngOnInit() {
    this.redirectIfLoggedIn();
  }

  onLoginClick() {
    this.signinService.signIn(
      this.user,
      this.password,
    ).then(() => {
      this.router.navigate(['admin']);
    }).catch(() => {
      this.error = 'Erreur de mot de passe ou identifiant'; 
    });
  }

  redirectIfLoggedIn() {
    if (this.signinService.isLoggedIn) {
      this.router.navigate(['admin']);
    }
  }
}
