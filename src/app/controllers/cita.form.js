angular.module('app').controller('citaFormCtrl', function(cita, $state, _doctores, _pacientes, locker, toastr, session) {

    var vm = this;
    var id = $state.params.id;
    vm.titulo = $state.current.data.titulo;
    vm.cita = cita.init();
    vm.doctores = _doctores;
    vm.pacientes = _pacientes;
    vm.dpOpened = false;
    vm.reservar = reservar;
    vm.isDoc = session.isDoctor();
    if (id) {
        getCita(id);
    }

    if (vm.isDoc) {
        vm.cita.doctor_id = locker.get('user').id;
    } else {
        vm.cita.paciente_id = locker.get('user').id;
    }

    vm.logout = function() {
        session.logout()
            .then(function(res) {
                $state.go('principal');
            });
    };

    function getCita(id) {
        cita.get(id)
            .then(function(res) {
                vm.cita = res;
            });
    }

    function reservar() {
        cita.reservar(vm.cita)
            .then(function(res) {
                vm.reserved = true;
                clean();
                toastr.success(res.msg, 'Éxito');
            });
    }

    function clean() {
        vm.cita = cita.init();
    }

});
