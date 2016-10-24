describe('Especialidad service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Especialidad) {
    expect(Especialidad.getData()).toEqual(3);
  }));
});
