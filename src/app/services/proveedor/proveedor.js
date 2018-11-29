function Proveedor($q, API, toastr) {

    var me = this;
    var url = 'proveedor';

    me.init = function() {
        return {
            nombre: '',
            direccion: '',
            telefono: '',
            email: '',
        }
    }

    me.getAll = function() {
        return API.get(url)
            .then(function(res) {
                return $q.resolve(res.data.rows);
            })
            .catch(function(err) {
                toastr.error(err, 'Error');
                return $q.reject(err);
            });
	};

    me.get = function(id) {
        return API.get(url + '/' + id)
            .then(function(res) {
                return $q.resolve(res.data.rows);
            })
            .catch(function(err) {
                toastr.error(err, 'Error');
                return $q.reject(err);
            });
    };

    me.create = function(provider) {
        return API.post(url, provider)
            .then(function(res) {
                return $q.resolve(res.data);
            })
            .catch(function(err) {
                toastr.error(err, 'Error');
                return $q.reject(err);
            });
    };

    me.update = function(provider) {
        return API.put(url + '/' + provider.id, provider)
            .then(function(res) {
                return $q.resolve(res.data);
            })
            .catch(function(err) {
                toastr.error(err, 'Error');
                return $q.reject(err);
            });
    };

    me.save = function(obj){
        if(obj.id){
            return me.update(obj);
        }else{
            return me.create(obj);
        }
    };

    me.delete = function(id) {
        return API.delete(url + '/' + id)
            .then(function(res) {
                return $q.resolve(res.data.rows);
            })
            .catch(function(err) {
                toastr.error(err, 'Error');
                return $q.reject(err);
            });
    };
}

angular
    .module('app')
    .service('proveedor', Proveedor);
