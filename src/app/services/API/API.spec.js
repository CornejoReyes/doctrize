describe('API service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (API) {
    expect(API.getData()).toEqual(3);
  }));
});
