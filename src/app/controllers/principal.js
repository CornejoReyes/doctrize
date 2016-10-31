angular.module('app').controller('principalCtrl', function($state, settings) {

    var vm = this;
    vm.titulo = settings.appName;
    vm.cita = false;


});
