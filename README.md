# RoutingStart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## 130. Setting up and Loading Routes

http://localhost:4200/
http://localhost:4200/users
http://localhost:4200/servers

## 131. Navigating with Router Links

<!-- this link works but it reloads all the page on every click -->
<!-- <li role="presentation"><a href="/servers">Servers</a></li> -->


## 132. Understanding Navigation Paths

The absolute path starts with "/" 

## 132 bis. Juste pour init

## 133. Styling Active Router Links

routerLinkActive
routerLinkActiveOptions

## 134. Navigating Programmatically

constructor(private router : Router) { }
this.router.navigate(['/servers']);

135. Using Relative Paths in Programmatic Navigation

Unlike the routerLink, the Router's navigate method does not know in which component you are
So it will consider the router as absolute path
Unless you specify the relativeTo option

    private route : ActivatedRoute
    {relativeTo:this.route}

## 136. Passing Parameters to Routes

  {path: 'users:id', component : UsersComponent},
  http://localhost:4200/users/1
  http://localhost:4200/users/nothing

## 137. Fetching Route Parameters

http://localhost:4200/users/123/nameExample

## 138. Fetching Route Parameters Reactively

this.route.params.subscribe

## 139. An Important Note about Route Observables

paramsSubscription : Subscription
ngOnDestroy(){
  this.paramsSubscription.unsubscribe;
}

## 140. Passing Query Parameters and Fragments

http://localhost:4200/servers/1/edit?allowEdit=1&defaultEdit=0#loading

  {path: 'servers/:id/edit', component : EditServerComponent},

  this.router.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit:'1', defaultEdit:'0'}, fragment: 'loading'});

  [routerLink]="['/servers', 1, 'edit']"
  [queryParams]="{allowEdit:1, defaultEdit:0}"
  [fragment]="'loading'"

## 141. Retrieving Query Parameters and Fragments

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

## 142. Practicing and some Common Gotchas

## 143. Setting up Child (Nested) Routes

  {path: 'servers', component : ServersComponent, children:[
      {path: ':id', component : ServerComponent},
      {path: ':id/edit', component : EditServerComponent}
    ]
  }

  <router-outlet></router-outlet>

  Il y avait une erruer dans ce path : C'était User*s*Component corrigé en UserComponent 
  {path: ':id/:name', component : UserComponent}

## 144. Using Query parameters - Practise

    this.router.navigate(['edit'], {relativeTo:this.route});


    this.route.queryParams.subscribe(
      (queryparams : Params) => {
        this.allowEdit=queryparams['allowEdit'] ==='1'?true:false;
      }
    );
    this.id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(this.id);

    <!-- Le chargement du temoin d'edition ne fonctionne pas encore(toujours not allowed) -->
    <!-- Ca sera fait dans la prochaine video -->
    <!-- A la différence du déroulé du court, j'ai rajouté le chargement du bon sreveur -->

## 145. Configuring the Handling of Query Parameters

    queryParamsHandling :'preserve'
        this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling :'preserve'});

## 146. Redirecting and Wildcard Routes

  {path : 'not-found', component:PageNotFoundComponent},
  {path : 'something', redirectTo:'/not-found'},
  // Make sure is the last path in this list
  {path : '**', redirectTo:'/not-found'}

## 148. Outsourcing the Route Configuration

  RouterModule

## 150. Protecting Routes with canActivate
  
  CanActivate
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

##151. Protecting Child (Nested) Routes with canActivateChild

  canActivateChild

## 152. Using a Fake Auth Service

## 153. Controlling Navigation with canDeactivate
