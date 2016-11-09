angular.module('app').controller('citaCtrl',function(doctor, _citas, $state){

    var vm = this;
    vm.citas = [
        []
    ];
    crearCitas(_citas);
    vm.titulo = $state.current.data.titulo;
    vm.reload = getCitas;

    function getCitas(){
        doctor.getCitas()
        .then(function(res){
            vm.citas = crearCitas(res);
        });
    }
    function crearCitas(citas){
        citas.forEach(function(c){
            var y = moment(c.fecha).year();
            var m = moment(c.fecha).month();
            var d = moment(c.fecha).date();
            var h = moment(c.tiempo).hours();
            var n = moment(c.tiempo).minutes();
            vm.citas[0].push({title:c.comentario,start:new Date(Date.UTC(y,m,d,h,n,00)),end:new Date(Date.UTC(y,m,d,h,n+30,00))});
        });
    }

    vm.uiConfig = {
      calendar:{
        height: 500,
        editable: true,
        header:{
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: vm.alertEventOnClick,
        eventDrop: vm.alertOnDrop,
        eventResize: vm.alertOnResize
      }
    };

});
