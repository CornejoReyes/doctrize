angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ui.calendar',
        'ngAnimate',
        'toastr',
        'angular-locker',
        'ui.select'
    ])
    .config(function(toastrConfig, lockerProvider) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
        });

        lockerProvider.defaults({
            driver: 'local',
            namespace: 'doctrize',
            separator: '_',
            eventsEnabled: true,
            extend: {}
        });

    })
    .run(function($rootScope, $state, session) {
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            if (toState.url === '/login' && session.isLogged()) {
                event.preventDefault();
                $state.go('dashboard.general');
                return;
            }

            if (toState.loginRequired && !session.isLogged()) {
                event.preventDefault();
                $rootScope.returnToState = '/' + toState.url;
                $state.go('principal');
                return;
            }

            if(toState.doctor && !session.isDoctor()){
                event.preventDefault();
                $rootScope.returnToState = '/' + toState.url;
                $state.go('dashboard.reserva');
            }

            if(!toState.doctor && session.isDoctor()){
                event.preventDefault();
                $state.go('dashboard.general');
            }

        });
    });
