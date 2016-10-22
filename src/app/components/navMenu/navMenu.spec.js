describe('navMenu component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('navMenu', function () {
      return {
        templateUrl: 'app/navMenu.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<navMenu></navMenu>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
