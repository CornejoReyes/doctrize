angular.module('app').controller('misCitasCtrl',function(paciente, _citas, $state){

    var vm = this;
    vm.citas = _citas;
    vm.titulo = $state.current.data.titulo;
    vm.reload = getCitas;

    function getCitas(){
        paciente.getCitas()
        .then(function(res){
            vm.citas = res;
        });
    }

});
