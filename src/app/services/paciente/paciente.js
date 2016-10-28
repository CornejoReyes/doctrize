function Paciente(API, toastr,$q) {
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
