function sidebarItemController($state) {
  var vm = this;
  
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
