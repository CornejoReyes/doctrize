function sidebarController() {

  var vm = this;


}



angular
  .module('app')
  .component('sidebar', {
      transclude: true,
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: sidebarController
  });
