describe('navMenuItem component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('navMenuItem', function () {
      return {
        templateUrl: 'app/navMenuItem.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<navMenuItem></navMenuItem>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
