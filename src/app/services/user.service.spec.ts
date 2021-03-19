import { User } from './../models/user.interface';
import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;

  // Se puede usar para iyectar servicios
  let injector: TestBed;

  //simular solicitudes
  let httpMock: HttpTestingController;

  afterEach(() => {
    // después de cada if verificamos haya solicitures pendientes.
    httpMock.verify();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    // tener acceso a las variables limpias antes de cada it
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('get users', () => {
    // instanciar servicio
    const service: UserService = TestBed.get(UserService);

    // mock objeto simulado de nuestra respuesta
    let mockUser: User[] = [
      {
        login: "mojombo",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mojombo",
        html_url: "https://github.com/mojombo",
        followers_url: "https://api.github.com/users/mojombo/followers",
        following_url: "https://api.github.com/users/mojombo/following{/other_user}",
        gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
        starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
        organizations_url: "https://api.github.com/users/mojombo/orgs",
        repos_url: "https://api.github.com/users/mojombo/repos",
        events_url: "https://api.github.com/users/mojombo/events{/privacy}",
        received_events_url: "https://api.github.com/users/mojombo/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/defunkt",
        html_url: "https://github.com/defunkt",
        followers_url: "https://api.github.com/users/defunkt/followers",
        following_url: "https://api.github.com/users/defunkt/following{/other_user}",
        gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
        starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
        organizations_url: "https://api.github.com/users/defunkt/orgs",
        repos_url: "https://api.github.com/users/defunkt/repos",
        events_url: "https://api.github.com/users/defunkt/events{/privacy}",
        received_events_url: "https://api.github.com/users/defunkt/received_events",
        type: "User",
        site_admin: false
      },
    ];
    // ejecutamos getAll() para suscribirnos
    service.getAll().subscribe((users) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUser);
      expect(users[0].login).toBeDefined();
    });

   // validar url api
    const req = httpMock.expectOne('https://api.github.com/users');
    // validar GET
    expect(req.request.method).toBe('GET');
    //proporcionar valors ficticios como respuesta de nuestras peticiones.
    req.flush(mockUser);
  });
});
