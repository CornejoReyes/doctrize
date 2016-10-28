describe('widgetHead component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('widgetHead', function () {
      return {
        templateUrl: 'app/widgetHead.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<widgetHead></widgetHead>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
