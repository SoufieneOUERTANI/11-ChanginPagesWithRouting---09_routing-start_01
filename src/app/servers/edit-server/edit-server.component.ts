import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDesactivate, CanDesactivateGuard } from './can-desactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDesactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  id = 0;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryparams: Params) => {
        this.allowEdit = queryparams['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    // A la différence du déroulé du court, j'ai rajouté le chargement du bon sreveur
    this.id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(this.id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // canDesactivate: () => boolean | Promise<boolean> | Observable<boolean>;

  canDesactivate(): boolean | Promise<boolean> | Observable<boolean> {

    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.server.name !== this.serverName || this.server.status !== this.serverStatus)
      &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?')
    } else {
      return true;
    }
  }

}
