function Cita($q, API, toastr) {

    var me = this;
    var url = 'cita';

    me.init = function(){
        var defTime = new Date();
        defTime.setHours(12);
        defTime.setMinutes(0);
        return {
            paciente_id: null,
            doctor_id: null,
            fecha: null,
            hora_reserva: moment().toDate(),
            tiempo: defTime,
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

    me.reservar = function(cita){
        return API.post(url,cita)
        .then(function(res){
            return $q.resolve(res.data);
        })
        .catch(function(err){
            toastr.error(err,'Error');
            return $q.reject(err);
        })
    };

}

angular
  .module('app')
  .service('cita', Cita);
