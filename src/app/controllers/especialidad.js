angular.module('app').controller('especialidadCtrl',function(especialidad, _especialidades, $state){

    var vm = this;
    vm.especialidades = _especialidades;
    vm.titulo = $state.current.data.titulo;
    vm.reload = getEspecialidades;

    function getEspecialidades(){
        especialidad.getAll()
        .then(function(res){
            vm.especialidades = res;
        });
    }

});
