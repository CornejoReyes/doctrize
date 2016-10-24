angular.module('app').controller('especialidadCtrl',function(especialidad){

    var vm = this;
    vm.especialidades = [];
    getEspecialidades();

    function getEspecialidades(){
        especialidad.getAll()
        .then(function(res){
            vm.especialidades = res;
        });
    }

});
