angular.module('app').controller('citaCtrl', function(doctor, _citas, $state) {

    var vm = this;
    vm.citas = [
        []
    ];
    crearCitas(_citas);
    vm.titulo = $state.current.data.titulo;
    vm.reload = getCitas;

    function getCitas() {
        doctor.getCitas()
            .then(function(res) {
                vm.citas = crearCitas(res);
            });
    }

    function crearCitas(citas) {
        citas.forEach(function(c) {
            //vm.citas[0].push({title:c.comentario,start:moment.utc(c.fecha+' '+c.tiempo).utcOffset(-6),end:moment.utc(c.fecha+' '+c.tiempo).utcOffset(-6).add(30,'minutes')});
            vm.citas[0].push({
                title: c.comentario,
                start: moment(c.fecha + ' ' + c.tiempo),
                end: moment(c.fecha + ' ' + c.tiempo).add(30, 'minutes'),
                url: $state.href('dashboard.cita-ver', {
                    id: c.id
                })
            });
        });
    }

    vm.uiConfig = {
        calendar: {
            lang: 'es',
            height: 500,
            editable: true,
            header: {
                left: 'month agendaWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        }
    };

});
