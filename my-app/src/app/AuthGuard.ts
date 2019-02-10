import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){

  }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | boolean{
    if(this.authService.isLoggedIn()){
      console.log("entered");
      this.router.navigate(['upload']);
      return true;


    }
    else{
      this.router.navigate(['Login']);
      return false;
    }

  }
}
