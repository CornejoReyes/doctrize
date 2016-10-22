function navMenuController() {

    var vm = this;

}

angular
  .module('app')
  .component('navMenu', {
    templateUrl: 'app/components/navMenu/navMenu.html',
    controller: navMenuController
  });
