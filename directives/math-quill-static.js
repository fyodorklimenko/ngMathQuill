(function () {
    'use strict';
    angular.module('app')
        .directive('mathQuillStatic', function () {
            return {
                restrict: 'A',
                scope: {
                    initialValue: '@',
                },
                link: function (scope, element) {
                    var MQ = MathQuill.getInterface(2);
                    var element = $(element);
                    element.html(scope.initialValue);
                    MQ.StaticMath($(element)[0]);
                }
            }
        })
})();