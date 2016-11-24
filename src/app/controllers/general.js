angular.module('app').controller('generalCtrl',function(paciente, cita,locker){

    var vm = this;
    vm.countPacientes = "";
    vm.countCitas = "";

    function countCitas(){
        cita.count()
        .then(function(res){
            vm.countCitas = res;
        });
    }
    function countPacientes(){
        paciente.count()
        .then(function(res){
            vm.countPacientes = res;
        });
    }

    countCitas();
    countPacientes();

});
