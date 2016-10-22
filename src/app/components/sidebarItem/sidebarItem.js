function sidebarItemController() {
  var vm = this;
  vm.$onInit = function() {

  };
}

angular
  .module('app')
  .component('sidebarItem', {
    bindings: {
        name: '@',
        icon:'@',
        state: '@'
    },
    require: {
      parent: '^sidebar'
    },
    templateUrl: 'app/components/sidebarItem/sidebarItem.html',
    controller: sidebarItemController
  });
