angular.module('app').controller('citaShowCtrl',function(cita, $state, toastr, paciente){

    var vm = this;
    var id = $state.params.id;
    vm.titulo = $state.current.data.titulo;
    vm.update = update;
    vm.editUserData = editUserData;
    vm.cancel = cancel;
    vm.comentario_doctor = '';
    vm.receta = '';
    vm.finished = false;
    vm.editable = false;
    vm.canceled = false;

    if(id){
        get(id);
    }

    function get(id){
        return cita.get(id)
        .then(function(res){
            vm.cita = res[0];
            vm.asd = moment(vm.cita.fecha).isSameOrBefore(moment());
            if (vm.cita.estado_id === 3) {
                vm.receta = vm.cita.receta.receta;
                vm.comentario_doctor = vm.cita.comentario_doctor;
                vm.finished = true;
            } else if(vm.cita.estado_id === 2){
                vm.canceled = true;
            }
            vm.canSave = canSave();
        });
    }

    function update() {
        cita.update(id, vm.receta, vm.comentario_doctor)
        .then(function(res) {
            vm.finished = true;
            toastr.success(res.msg, 'Éxito');
        });
    }

    function editUserData() {
        paciente.editUserData(vm.cita.paciente.id, vm.cita.paciente.datos).
        then(function(res) {
            toastr.success(res.msg, 'Éxito');
            vm.editable = false;
        });
    }

    function canSave() {
        if (moment(vm.cita.fecha).isSameOrBefore(moment())) {
            return true;
        }
        return false;
    }

    function cancel() {
        cita.cancel(id)
        .then(function(res) {
            vm.canceled = true;
            toastr.success(res.msg, 'Completado');
        });
    }
});
