describe('sidebarItem component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('sidebarItem', function () {
      return {
        templateUrl: 'app/sidebarItem.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<sidebarItem></sidebarItem>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
