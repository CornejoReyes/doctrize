function widgetHeadController() {

    var vm = this;
    vm.visibleHead = vm.visibleHead ? vm.visibleHead : false;

}

angular.module('app')
    .component('widgetHead', {
        templateUrl: 'app/components/widget/widgetHead/widgetHead.html',
        controller: widgetHeadController,
        bindings: {
            visibleHead: '=',
            title: '@',
            widgetTools: '@',
            closeButton: '@',
            addButton: '@',
            reloadButton: '@',
            state: '@',
            add: '@',
            reload: '@',
            reloadAction: '='
        },
        require: {
            parent: '^widget'
        }
    });
