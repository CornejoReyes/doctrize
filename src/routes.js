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
        templateUrl:'app/views/login.html',
        controller: 'loginCtrl as vm'
    })
    .state('principal', {
        url: '/principal',
        controller: 'principalCtrl as vm',
        templateUrl: 'app/views/principal.html'
    })
    .state('dashboard', {
      url: '/',
      templateUrl: 'app/views/main.html',
    })
    .state('dashboard.general', {
        url: 'general',
        templateUrl: 'app/views/general.html'
    })
    .state('dashboard.pacientes', {
        url: 'paciente',
        templateUrl: 'app/views/pacientes.html',
        controller: 'pacienteCtrl as vm',
        resolve: {
            _pacientes: function(paciente){
                return paciente.getAll();
            }
        },
        data: {
            titulo: 'Pacientes'
        }
    })
    .state('dashboard.paciente-nuevo', {
      url: 'paciente/nuevo',
      controller: 'pacienteFormCtrl as vm',
      templateUrl: 'app/views/paciente.form.html',
      data: {
        titulo: 'Paciente > Nuevo'
      }
    })
    .state('dashboard.paciente-editar', {
      url: 'paciente/{id}',
      controller: 'pacienteFormCtrl as vm',
      templateUrl: 'app/views/paciente.form.html',
      data: {
        titulo: 'Paciente > Editar'
      }
    })
    .state('dashboard.especialidad', {
        url: 'especialidad',
        templateUrl: 'app/views/especialidades.html',
        controller: 'especialidadCtrl as vm',
        resolve: {
            _especialidades: function(especialidad){
                return especialidad.getAll();
            }
        },
        data: {
            titulo: 'Especialidades'
        }
    })
    .state('dashboard.especialidad-nuevo', {
      url: 'especialidad/nuevo',
      controller: 'especialidadFormCtrl as vm',
      templateUrl: 'app/views/especialidades.form.html',
      data: {
        titulo: 'Especialidad > Nuevo'
      }
    })
    .state('dashboard.especialidad-editar', {
      url: 'especialidad/{id}',
      controller: 'especialidadFormCtrl as vm',
      templateUrl: 'app/views/especialidades.form.html',
      data: {
        titulo: 'Especialidad > Editar'
      }
    });
}
