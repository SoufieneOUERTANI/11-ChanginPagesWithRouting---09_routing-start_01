import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";

export interface CanComponentDesactivate{
    canDesactivate : () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDesactivateGuard implements CanDeactivate<CanComponentDesactivate>{
    canDeactivate(component: CanComponentDesactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDesactivate();
    }
    canDesactivate: () => boolean | Observable<boolean> | Promise<boolean>;

} 