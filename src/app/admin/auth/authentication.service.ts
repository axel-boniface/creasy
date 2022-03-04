import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { map } from "@firebase/util";

import { from, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: firebase.default.User;

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  constructor(
    private angularFireAuth: AngularFireAuth,
  ){
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe((res) => {
      this.userData = res;
    });
  }

  signIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        this.userData = res.user;
      });
  }

  signOut(): Promise<any> {
    return this.angularFireAuth.signOut()
      .then(() => {
        localStorage.setItem('user', null);
      });
  }
}
