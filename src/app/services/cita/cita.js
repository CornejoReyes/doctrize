function Cita($q, API, toastr) {

    var me = this;
    var url = 'cita';

    me.init = function(){
        return {
            paciente_id: null,
            doctor_id: null,
            fecha_programada: null,
            comentario: null
        };
    };

    me.getAll = function(){
        return API.get(url)
        .then(function(res){
            return $q.resolve(res.data.rows);
        })
        .catch(function(err){
            toastr.error(err, 'Error');
            return $q.reject(err);
        });
    };

    me.get = function(id){
        return API.get(url + '/' + id)
        .then(function(res){
            return $q.resolve(res.data.rows);
        })
        .catch(function(err){
            toastr.error(err, 'Error');
            return $q.reject(err);
        });
    };

}

angular
  .module('app')
  .service('cita', Cita);
