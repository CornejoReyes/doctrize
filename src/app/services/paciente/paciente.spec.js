describe('Paciente service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Paciente) {
    expect(Paciente.getData()).toEqual(3);
  }));
});
