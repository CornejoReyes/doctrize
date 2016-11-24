angular.module('app').controller('expedientesCtrl',function(paciente, $state){

    var vm = this;
    var id = $state.params.id;
    vm.titulo = $state.current.data.titulo;
    vm.reload = getCitasId;

    if (id){
        getCitasId(id);
    }

    function getCitasId(id){
        paciente.getCitasId(id)
        .then(function(res){
            vm.citas = res;
        });
    }

});
