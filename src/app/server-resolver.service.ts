import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ServersService} from './servers/servers.service';
import {Injectable} from '@angular/core';

interface Server {
  id: number;
  name: number;
  status: number;
}

@Injectable()
export class ServerResolverService implements Resolve<Server> {

  constructor(private serverService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    // @ts-ignore
    return this.serverService.getServer(+route.params['id']);
  }

}
