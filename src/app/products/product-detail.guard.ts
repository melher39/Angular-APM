import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = Number(next.paramMap.get("id"));
    if (isNaN(id) || id < 1) {
      alert("Invalid product ID");
      this.router.navigate(["/products"]);
      // lets the router know to cancel activating the product detail route
      return false;
    }
    // otherwise, return true and continue on to the product detail page
    return true;
  }
}
