describe('sidebar component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('sidebar', function () {
      return {
        templateUrl: 'app/sidebar.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<sidebar></sidebar>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
