angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'toastr',
    'angular-locker'
]).config(function(toastrConfig,lockerProvider){
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

});
