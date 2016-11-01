angular.module('app').controller('citaFormCtrl', function(cita, $state, _doctores){

    var vm = this;
    var id = $state.params.id;
    vm.titulo = $state.current.data.titulo;
    vm.cita = cita.init();
    vm.doctores = _doctores;
    vm.dpOpened = false;
    if(id){
        getCita(id);
    }

    function getCita(id){
        cita.get(id)
        .then(function(res){
            vm.cita = res;
        });
    }

});
