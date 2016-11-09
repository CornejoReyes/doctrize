angular.module('app').controller('mainCtrl', function($state, settings, session) {

    var vm = this;
    vm.titulo = settings.appName;
    vm.logout = function(){
        session.logout()
        .then(function(res){
            $state.go('principal');
        });
    };

    vm.doctor = function(){
        return session.isDoctor();
    };


});
