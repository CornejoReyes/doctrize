angular
    .module('app')
    .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/principal');

    $stateProvider
        .state('app', {
            abstract: true,
            url: '',
            component: 'app'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.html',
            controller: 'loginCtrl as vm'
        })
        .state('principal', {
            url: '/principal',
            controller: 'principalCtrl as vm',
            templateUrl: 'app/views/principal.html'
        })
        .state('dashboard.reserva', {
            url: 'reserva',
            templateUrl: 'app/views/reserva.html',
            controller: 'citaFormCtrl as vm',
            data: {
                titulo: 'Haz una cita'
            },
            resolve: {
                _doctores: function(doctor){
                    return doctor.getAll();
                },
                _pacientes: function (paciente) {
                    return paciente.getAll();
                }
            },
            loginRequired: true,
            shouldPass: true
        })
        .state('dashboard', {
            url: '/',
            templateUrl: 'app/views/main.html',
            controller: 'mainCtrl as vm',
            loginRequired: true,
        })
        .state('dashboard.general', {
            url: 'general',
            templateUrl: 'app/views/general.html',
            controller:'generalCtrl as vm',
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.pacientes', {
            url: 'paciente',
            templateUrl: 'app/views/pacientes.html',
            controller: 'pacienteCtrl as vm',
            resolve: {
                _pacientes: function(paciente) {
                    return paciente.getAll();
                }
            },
            data: {
                titulo: 'Pacientes'
            },
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.paciente-nuevo', {
            url: 'paciente/nuevo',
            controller: 'pacienteFormCtrl as vm',
            templateUrl: 'app/views/paciente.form.html',
            data: {
                titulo: 'Paciente > Nuevo'
            },
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.paciente-editar', {
            url: 'paciente/{id}',
            controller: 'pacienteFormCtrl as vm',
            templateUrl: 'app/views/paciente.form.html',
            data: {
                titulo: 'Paciente > Editar'
            },
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.especialidad', {
            url: 'especialidad',
            templateUrl: 'app/views/especialidades.html',
            controller: 'especialidadCtrl as vm',
            resolve: {
                _especialidades: function(especialidad) {
                    return especialidad.getAll();
                }
            },
            data: {
                titulo: 'Especialidades'
            },
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.especialidad-nuevo', {
            url: 'especialidad/nuevo',
            controller: 'especialidadFormCtrl as vm',
            templateUrl: 'app/views/especialidades.form.html',
            data: {
                titulo: 'Especialidad > Nuevo'
            },
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.especialidad-editar', {
            url: 'especialidad/{id}',
            controller: 'especialidadFormCtrl as vm',
            templateUrl: 'app/views/especialidades.form.html',
            data: {
                titulo: 'Especialidad > Editar'
            },
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.citas', {
            url: 'citas',
            templateUrl: 'app/views/citas.html',
            controller: 'citaCtrl as vm',
            data: {
                titulo: 'Citas'
            },
            resolve: {
                _citas: function(doctor){
                    return doctor.getCitas();
                }
            },
            loginRequired: true,
            doctor: true
        })
        .state('dashboard.mis-citas', {
            url: 'mis-citas',
            templateUrl: 'app/views/miscitas.html',
            controller: 'misCitasCtrl as vm',
            data:{
                titulo: 'Mis Citas'
            },
            resolve: {
                _citas: function(paciente){
                    return paciente.getCitas();
                }
            },
            loginRequired: true,
            doctor:false
        })
        .state('dashboard.cita-ver', {
            url: 'citas/{id}',
            templateUrl: 'app/views/cita.show.html',
            controller: 'citaShowCtrl as vm',
            data: {
                titulo: 'Cita > Ver'
            },
            loginRequired:true,
            doctor:true
        })
        .state('dashboard.expediente', {
            url: 'expediente/{id}',
            controller: 'expedientesCtrl as vm',
            templateUrl: 'app/views/miscitas.html',
            data: {
                titulo: 'Expediente'
            },
            loginRequired:true,
            doctor:true
        });
}
