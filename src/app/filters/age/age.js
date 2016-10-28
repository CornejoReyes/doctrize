function Age() {
    function calculateAge(birthday) { // birthday is a date
        var ages = new Date(birthday);
         var ageDifMs = Date.now() - ages.getTime();
         var ageDate = new Date(ageDifMs); // miliseconds from epoch
         return Math.abs(ageDate.getUTCFullYear() - 1970);
     }

     return function(birthdate) {
           return calculateAge(birthdate);
     };
}


angular.module('app').filter('age', Age);
