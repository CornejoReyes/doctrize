angular.module('app').controller('pacienteCtrl', function(paciente, _pacientes, $state) {

    var vm = this;
    vm.pacientes = _pacientes;
    vm.titulo = $state.current.data.titulo;
    vm.reload = getPacientes;

    function getPacientes() {
        paciente.getAll()
            .then(function(res) {
                vm.pacientes = res;
            });
    }

});
