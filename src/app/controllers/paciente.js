angular.module('app').controller('pacienteCtrl',function(paciente){

    var vm = this;
    vm.pacientes = [];
    getPacientes();

    function getPacientes(){
        paciente.getAll()
        .then(function(res){
            vm.pacientes = res;
        });
    }

});
