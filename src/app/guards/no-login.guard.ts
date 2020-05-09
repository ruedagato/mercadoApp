import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoLoginGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.afAuth.user.pipe(
      map((user) => !user),
      tap((isNoLogin) => {
        if (!isNoLogin) {
          this.router.navigate(['home']);
        }
      })
    );
  }
}