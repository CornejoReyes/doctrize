angular.module('app').controller('proveedorCtrl', function(proveedor, _proveedores, $state, toastr) {

    var vm = this;
    vm.proveedores = _proveedores;
    vm.titulo = $state.current.data.titulo;
    vm.reload = getproveedores;
    vm.remove = remove;

    function getproveedores() {
        proveedor.getAll()
            .then(function(res) {
                vm.proveedores = res;
            });
    }

    function remove(id) {
        proveedor.delete(id).then(function(res) {
            toastr.success('Proveedor borrado', 'Éxito');
            vm.reload();
        });
    }

});
