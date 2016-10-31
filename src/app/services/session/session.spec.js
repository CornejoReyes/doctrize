describe('Session service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Session) {
    expect(Session.getData()).toEqual(3);
  }));
});
