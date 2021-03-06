import {Welcome} from 'src/app/app';

class RouterStub {
  configure(handler) {
    handler(this);
  }
  map(routes) {
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut;
  beforeEach(() => { sut = new Welcome(); });

  it('check heading title', () => {
    expect(sut.heading).toEqual('Test');
  });

  // it('contains a router property', () => {
  //   expect(sut.router).toBeDefined();
  // });

  // it('configures the router title', () => {
  //   expect(sut.router.title).toEqual('Test');
  // });

  // it('should have a welcome route', () => {
  //   expect(sut.router.routes).toContain({ route: ['','welcome'],  moduleId: 'welcome', nav: true, title:'Welcome' });
  // });

  // it('should have a flickr route', () => {
  //    expect(sut.router.routes).toContain({ route: 'flickr', moduleId: 'flickr', nav: true });
  // });

  // it('should have a child router route', () => {
  //   expect(sut.router.routes).toContain({ route: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' });
  // });
});
