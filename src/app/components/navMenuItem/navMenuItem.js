function navMenuItemController() {

  var vm = this;
  vm.$onInit = function() {

  };

}

angular
  .module('app')
  .component('navMenuItem', {
    bindings: {
      icon: '@'
    },
    require: {
      parent: '^navMenu'
    },
    templateUrl: 'app/components/navMenuItem/navMenuItem.html',
    controller: navMenuItemController
  });
