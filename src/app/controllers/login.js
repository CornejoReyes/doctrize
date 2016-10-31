angular.module('app').controller('loginCtrl', function($state, settings, session) {

    var vm = this;
    vm.titulo = settings.appName;
    vm.login = function(paciente){
        paciente.rol = 1;
        session.login(paciente)
        .then(function(res){
            $state.go('dashboard.general');
        });
    }


});
