function Sex() {
    return function(sex){
        var realSex = sex == 1 ? 'Hombre' : 'Mujer';
        return realSex;
    };
}

angular.module('app')
  .filter('sex', Sex);
