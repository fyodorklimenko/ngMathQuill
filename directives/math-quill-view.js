(function () {
    'use strict';
    angular.module('app')
        .directive('mathQuillView', function () {
            return {
                restrict: 'A',
                scope: {
                    value: '&',
                },
                link: function (scope, element) {

                    var vm = scope;
                    var element = $(element);
                    var MQ = MathQuill.getInterface(2);

                    scope.$watch(function() { return vm.value(); }, function(nv) {
                        element.html(scope.value);
                        MQ.StaticMath($(element)[0]);
                    });
                }
            }
        })
})();