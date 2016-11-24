angular.module('app').controller('citaShowCtrl',function(cita, $state){

    var vm = this;
    var id = $state.params.id;
    vm.titulo = $state.current.data.titulo;

    if(id){
        get(id);
    }

    function get(id){
        cita.get(id)
        .then(function(res){
            vm.cita = res[0];
        });
    }

});
