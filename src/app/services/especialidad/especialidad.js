function Especialidad(API, $q, toastr) {

    var me = this;
    var url = 'especialidad';

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

}

angular.module('app')
  .service('especialidad', Especialidad);
