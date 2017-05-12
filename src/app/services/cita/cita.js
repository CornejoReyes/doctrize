function Cita($q, API, toastr,locker) {

    var me = this;
    var url = 'cita';

    me.init = function(){
        var defTime = moment().seconds(0).minutes(0).toDate();
        return {
            paciente_id: null,
            doctor_id: null,
            fecha: null,
            hora_reserva: moment().toDate(),
            tiempo: defTime,
            comentario: null
        };
    };

    me.count = function (){
        var id = locker.get('user').id;
        return API.post(url+'/count', {id:id})
        .then(function(res){
            return $q.resolve(res.data.rows.rows);
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
        cita = angular.copy(cita);
        cita.fecha = moment(cita.fecha).format('YYYY-MM-DD');
        cita.tiempo = moment(cita.tiempo).format('HH:mm');

        cita.fecha = moment(cita.fecha + ' ' + cita.tiempo).format('YYYY-MM-DD HH:mm');


        return API.post(url,cita)
        .then(function(res){
            return $q.resolve(res.data);
        })
        .catch(function(err){
            toastr.error(err,'Error');
            return $q.reject(err);
        });
    };

    me.update = function(id, receta, comentario) {
        return API.post(url + '/' + id + '/update', {receta: receta, comentario_doctor: comentario})
        .then(function(res) {
            return $q.resolve(res.data);
        })
        .catch(function(err) {
            toastr.error(err, 'Error');
            return $q.reject(err);
        });
    };

    me.cancel = function(id) {
        return API.post(url + '/' + id + '/cancel')
        .then(function(res) {
            return $q.resolve(res.data);
        })
        .catch(function(err) {
            toastr.error(err, 'Error');
            return $q.reject(err);
        })
    };

}

angular
  .module('app')
  .service('cita', Cita);
