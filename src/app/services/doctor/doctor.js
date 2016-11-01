function Doctor($q, API, toastr) {

    var me = this;
    var url = 'doctor';

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

}

angular
    .module('app')
    .service('doctor', Doctor);
