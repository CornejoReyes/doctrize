

angular
  .module('app')
  .constant('settings', {
      appVersion: '1.0.0',
      appName: 'Doctrize',
    //   baseUrl: 'http://158.69.202.20/doctrize-api/api/public/index.php/api/'
      baseUrl: 'http://localhost:8000/api/'
  });
