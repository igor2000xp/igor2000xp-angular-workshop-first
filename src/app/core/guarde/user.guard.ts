import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.doesEserExist();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | UrlTree {
    return this.doesEserExist();
  }

  private doesEserExist(): boolean | UrlTree {
    return !!this.userService.getSavedUser() || this.router.parseUrl('/welcome');
  }
}
