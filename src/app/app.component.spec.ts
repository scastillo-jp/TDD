import { User } from './models/user.interface';
import { UserService } from './services/user.service';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { of } from 'rxjs';

describe('AppComponent', () => {

  let appComponent: any;
  let service: any;
  //beforeAll
  beforeAll(() => {
    console.log('beforeAll');
  })

  //beforeEach
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        UserService,
        AppComponent
      ],
      imports:[
        HttpClientTestingModule
       ]
    }).compileComponents();

    appComponent = TestBed.inject(AppComponent);
    service = TestBed.inject(UserService);
    console.log('beforeEach')
  });

  //afterAll
  afterAll(() => {
    console.log('afterAll');
  })

  //afterEach
  afterEach(() => {
    console.log('afterEach')
  })

  it(`should have as title 'UT'`, () => {
    const value = appComponent.title;
    expect(value).toEqual('UT');
  });

  it(`should find in the title 'UT IOET'`, () => {
    // const fixture = new AppComponent();
    const value = appComponent.company;
    expect(value).toContain('IOET');
  });

  it('the var status should be return a true', () => {
    const value = appComponent.status;
    expect(value).toBeTruthy();
  });

  it('if receive a number return true', () => {
    const num = appComponent.isNumber(20);
    expect(num).toBeTruthy();
  });

  it('if receive a text return false', () => {
    const num = appComponent.isNumber('hola');
    expect(num).toBeFalsy();
  });

  [
    { url: 'http://hola.com', },
    { url: 'https://hola.com' }
  ].map((value) => {
    it('if the url have http or https should be return  true', () => {
      const url = appComponent.validUrl(value.url);
      expect(url).toBeTruthy();
    })
  });

  xit('all service: userService and getAll() to get all users', () => {
    const mockUser: User[] = [
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
    ]
    const users = spyOn(service, 'getAll').and.callFake( () => {
      return of(mockUser);
    });

    appComponent.ngOnInit();
    expect(users).toHaveBeenCalled();
  });
});
