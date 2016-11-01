describe('Cita service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Cita) {
    expect(Cita.getData()).toEqual(3);
  }));
});
