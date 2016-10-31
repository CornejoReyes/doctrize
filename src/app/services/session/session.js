function Session(API, locker, toastr, $q) {

    var me = this;
    var url = 'auth';

    me.login = function(user){
        return API.post(url + '/login', user)
        .then(function(res){
            locker.put('user', user);
            return $q.resolve(res.data);
        })
        .catch(function(err){
            toastr.error(err, 'Error');
            return $q.reject(err);
        });
    }

}

angular
  .module('app')
  .service('session', Session);
