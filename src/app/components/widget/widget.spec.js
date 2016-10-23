describe('widget component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('widget', function () {
      return {
        templateUrl: 'app/widget.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<widget></widget>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
