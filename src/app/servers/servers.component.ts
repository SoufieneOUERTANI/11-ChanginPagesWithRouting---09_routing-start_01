import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // works fine as considerred as absolute
    // this.router.navigate(['servers']);

    // works fine as considerred as absolute
    this.router.navigate(['/servers'], {relativeTo:this.route})
    
    // Does not work fine as considered as relative path an it will have the /servers/servers route
    // this.router.navigate(['servers'], {relativeTo:this.route})
  }
}
