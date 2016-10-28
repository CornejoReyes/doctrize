angular.module('app').controller('especialidadFormCtrl', function(especialidad, $state, toastr){

    var vm = this;
    var id = $state.params.id;
    vm.titulo = $state.current.data.titulo;
    vm.save = save;
    vm.clean = clean;

    console.log(id);
    if(id){
        getEspecialidad(id);
    }

    function getEspecialidad(id){
        especialidad.get(id)
        .then(function(res){
            vm.especialidad = res;
            console.log(vm.especialidad);
        });
    }

    function save(){
        especialidad.create(vm.especialidad)
        .then(function(res){
            toastr.success(res.data.msg, 'Éxito');
            vm.clean();
        })
        .catch(function(err){
            toastr.error(err, 'Error');
        })
    }

    function clean(){
        vm.especialidad = especialidad.init();
    }

});
