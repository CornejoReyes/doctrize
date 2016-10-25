angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  //$locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/general');

  $stateProvider
    .state('app', {
      abstract: true,
      url: '',
      component: 'app'
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
        url: 'pacientes',
        templateUrl: 'app/views/pacientes.html',
        controller: 'pacienteCtrl as vm'
    })
    .state('dashboard.paciente-nuevo', {
      url: 'pacientes/nuevo',
      controller: 'pacienteFormCtrl as vm',
      templateUrl: 'app/views/paciente.form.html',
      data: {
        titulo: 'Paciente > Nuevo'
      }
    })
    .state('dashboard.paciente-editar', {
      url: 'pacientes/{int:id}',
      controller: 'pacienteFormCtrl as vm',
      templateUrl: 'app/views/paciente.form.html'
    })
    .state('dashboard.especialidad', {
        url: 'especialidades',
        templateUrl: 'app/views/especialidades.html',
        controller: 'especialidadCtrl as vm'
    });
}
