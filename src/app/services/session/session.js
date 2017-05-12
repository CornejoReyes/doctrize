function Session(API, locker, toastr, $q) {

    var me = this;
    var url = 'auth';

    me.login = function(user){
        return API.post(url + '/login', user)
        .then(function(res){
            user.id = res.data.rows;
            locker.put('user', user);
            locker.put('loggedin', true);
            return $q.resolve(res.data);
        })
        .catch(function(err){
            toastr.error(err, 'Error');
            return $q.reject(err);
        });
    };

    me.logout = function(){
        return API.post(url + '/logout')
        .then(function(res){
            toastr.info(res.data.msg, 'Sesion terminada');
            locker.clean();
        });
    };

    me.isLogged = function(){
        var loged = locker.get('loggedin') || false;
        return loged;
    };

    me.isDoctor = function(){
        var user = locker.get('user');
        if(user && user.rol == 1){
            return true;
        }
        return false;
    };

}

angular
  .module('app')
  .service('session', Session);
