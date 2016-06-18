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
                    var jElement = $(element);
                    var MQ = MathQuill.getInterface(2);

                    scope.$watch(function() { return vm.value(); }, function(nv) {
                        jElement.html(scope.value);
                        MQ.StaticMath(jElement[0]);
                    });
                }
            }
        })
})();