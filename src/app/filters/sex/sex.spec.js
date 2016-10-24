describe('Sex service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Sex) {
    expect(Sex.getData()).toEqual(3);
  }));
});
