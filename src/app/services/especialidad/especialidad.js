function Especialidad(API, $q, toastr) {

    var me = this;
    var url = 'especialidad';

    me.init = function(){
        return {
            id: null,
            nombre: null
        };
    }
    me.getAll = function(){
        return API.get(url)
        .then(function(res){
            return $q.resolve(res.data.rows)
        })
        .catch(function(err){
            toastr.error(err, 'Error');
            return $q.reject(err);
        })
    };

    me.get = function(id){
        return API.get(url + '/' + id)
        .then(function(res){
            return $q.resolve(res.data.rows)
        })
        .catch(function(err){
            toastr.error(err, 'Error');
            return $q.reject(err);
        })
    };

    me.create = function(especialidad){
        return API.post(url,especialidad);
    };

    me.update = function(especialidad){
        return API.put(url + '/' + especialidad.id, especialidad);
    };

    me.save = function(especialidad){
        if(especialidad.id){
            return me.update(especialidad);
        }else{
            return me.create(especialidad);
        }
    };

}

angular.module('app')
  .service('especialidad', Especialidad);
