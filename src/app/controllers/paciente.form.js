angular.module('app').controller('pacienteFormCtrl', function(paciente, $state, toastr){

    var vm = this;
    var id = $state.current.id;
    vm.titulo = $state.current.data.titulo;
    vm.dpOpened = false;
    vm.maxDate = moment();
    vm.save = save;
    vm.clean = clean;


    if(id){
        getPaciente(id);
    }

    function getPaciente(id){
        paciente.get(id)
        .then(function(res){
            vm.paciente = res;
        });
    }

    function save(){
        paciente.create(vm.paciente)
        .then(function(res){
            toastr.success(res.data.msg, 'Éxito');
            clean();
        })
        .catch(function(err){
            toastr.error(err, 'Error');
        })
    }

    function clean(){
        vm.paciente = paciente.init();
    }

});
