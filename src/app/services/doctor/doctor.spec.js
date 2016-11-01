describe('Doctor service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Doctor) {
    expect(Doctor.getData()).toEqual(3);
  }));
});
