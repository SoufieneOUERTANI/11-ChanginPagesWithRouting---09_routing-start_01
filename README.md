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
