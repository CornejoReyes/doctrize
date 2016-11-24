function Paciente(API, toastr,$q,locker) {
    var me = this;
    var url = 'paciente';

    me.init = function(){
        return {
            nombre: null,
            apellido_paterno: null,
            apellido_materno: null,
            sexo: null,
            fecha_nacimiento: null,
            calle: null,
            colonia: null,
            municipio: null,
            telefono: null
        };
    }

    me.count = function (){
        return API.get(url+'/count')
        .then(function(res){
            return $q.resolve(res.data.rows);
        })
        .catch(function(err){
            toastr.error(err, 'Error');
        });
    }

    me.getAll = function(){
        return API.get(url)
        .then(function(res){
            return $q.resolve(res.data.rows);
        })
        .catch(function(err){
            toastr.error(err,'Error');
            return $q.reject(err);
        });
    };

    me.get = function(id){
        return API.get(url +'/' +id)
        .then(function(res){
            return $q.resolve(res.data.rows);
        })
        .catch(function(err){
            toastr.error(err,'Error');
            return $q.reject(err);
        });
    };

    me.getCitas = function(){
        var id = locker.get('user').id;
        return API.get(url + '/' + id + '/citas')
        .then(function(res){
            return $q.resolve(res.data.rows[0].citas);
        })
        .catch(function(err){
            toastr.error(err,'Error');
            return $q.reject(err);
        });
    };
    me.getCitasId = function(id){
        return API.get(url + '/' + id + '/citas')
        .then(function(res){
            return $q.resolve(res.data.rows[0].citas);
        })
        .catch(function(err){
            toastr.error(err,'Error');
            return $q.reject(err);
        });
    };

    me.create = function(obj){
        return API.post(url, obj);
    };

    me.update = function(obj){
        return API.put(url + '/' + obj.id, obj);
    };

    me.save = function(obj){
        if(obj.id){
            return me.update(obj);
        }else{
            return me.create(obj);
        }
    };

}


angular
  .module('app')
  .service('paciente', Paciente);
