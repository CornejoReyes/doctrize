angular.module('app').controller('citaCtrl',function(cita, _citas, $state){

    var vm = this;
    vm.citas = _citas;
    vm.titulo = $state.current.data.titulo;
    vm.reload = getCitas;

    function getCitas(){
        cita.getAll()
        .then(function(res){
            vm.citas = res;
        });
    }

});
