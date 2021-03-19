import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let appComponent: any;
  //beforeAll
  beforeAll(() => {
    console.log('beforeAll');
  })

  //beforeEach
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    appComponent = new AppComponent();
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
    {url: 'http://hola.com', },
    {url: 'https://hola.com'}
  ].map((value) => {
    it('if the url have http or https should be return  true', () => {
      const url = appComponent.validUrl(value.url);
      expect(url).toBeTruthy();
    })
  })
});
