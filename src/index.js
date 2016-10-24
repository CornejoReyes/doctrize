angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'toastr'
]).config(function(toastrConfig){
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
});
