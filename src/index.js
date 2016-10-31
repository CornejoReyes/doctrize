angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'toastr',
        'angular-locker'
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
                $state.go('login');
                return;
            }
        });
    });
