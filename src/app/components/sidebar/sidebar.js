function sidebarController(settings) {

  var vm = this;
  vm.appName = settings.appName;
  vm.appVersion = settings.appVersion;

}



angular
  .module('app')
  .component('sidebar', {
      transclude: true,
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: sidebarController
  });
