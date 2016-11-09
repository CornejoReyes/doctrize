angular.module('app').controller('principalCtrl', function($state, settings, session,paciente) {

    var vm = this;
    vm.titulo = settings.appName;
    vm.cita = false;
    vm.login = login;
    vm.paciente = {};

    function login(){
        vm.paciente.rol = 2;
        session.login(vm.paciente)
        .then(function(){
            $state.go('dashboard.reserva');
        });
    }


});
