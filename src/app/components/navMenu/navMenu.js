function navMenuController(settings) {

  var vm = this;
  vm.appName = settings.appName;
  vm.appVersion = settings.appVersion;

}

angular
  .module('app')
  .component('navMenu', {
    transclude: true,
    templateUrl: 'app/components/navMenu/navMenu.html',
    controller: navMenuController
  });
