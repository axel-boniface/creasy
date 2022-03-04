import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ){}

  onDiconnectClick() {
    this.authenticationService.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
