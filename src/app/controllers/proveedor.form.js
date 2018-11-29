angular.module('app').controller('proveedorFormCtrl', function(proveedor, $state, toastr){

    var vm = this;
    var id = $state.params.id;
    vm.titulo = $state.current.data.titulo;
    vm.dpOpened = false;
    vm.maxDate = moment();
    vm.save = save;
    vm.clean = clean;


    if(id){
        getProveedor(id);
    }

    function getProveedor(id){
        proveedor.get(id)
        .then(function(res){
            vm.proveedor = res;
        });
    }

    function save(){
        proveedor.save(vm.proveedor)
        .then(function(res){
            toastr.success(res.msg, 'Éxito');
            if(!vm.proveedor.id){
                vm.clean();
            }
        })
        .catch(function(err){
            toastr.error(err, 'Error');
        })
    }

    function clean(){
        vm.proveedor = proveedor.init();
    }

});
