function widgetController() {

    var vm = this;
    vm.$onInit = function(){

    };

}

angular
  .module('app')
  .component('widget', {
    transclude: true,
    templateUrl: 'app/components/widget/widget.html',
    controller: widgetController
  });
