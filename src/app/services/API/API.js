function API(settings, $http, $q) {

    var baseUrl = settings.baseUrl;

        function makeRequest(verb, uri, data, config) {
            verb = verb.toLowerCase();

            //start with the uri

            var httpArgs = [baseUrl + uri];
            if (verb.match(/post|put/)) {
                httpArgs.push(data);
            }
            var headers = {
                headers: {
                    //'Content-Type': 'application/json'
                }
            };

            if (angular.isObject(config)) {
                angular.merge(headers, config);
            }

            httpArgs.push(headers);

            return $http[verb].apply(null, httpArgs)
                .then(function(data) {
                    return data;
                    // update angular's scopes
                    // $rootScope.$$phase || $rootScope.$apply();
                })
                .catch(function(err) {
                    if (err.data && err.data.msg) {
                        return $q.reject(err.data.msg);
                    } else if (err.status === -1) {
                        return $q.reject('Sin conexión a los servicios');
                    } else if (err.status === 401) {
                        return $q.reject(''); //'No tienes autorización para esta solicitud');
                    } else {
                        return $q.reject('Se produjo un error');
                    }
                });

        }

        return {
            get: function(uri, config) {
                return makeRequest('get', uri, null, config);
            },
            post: function(uri, data, config) {
                return makeRequest('post', uri, data, config);
            },
            put: function(uri, data, config) {
                return makeRequest('put', uri, data, config);
            },
            delete: function(uri) {
                return makeRequest('delete', uri);
            }
        };

}


angular.module('app')
  .service('API', API);
