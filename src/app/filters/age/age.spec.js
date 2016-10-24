describe('Age service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Age) {
    expect(Age.getData()).toEqual(3);
  }));
});
