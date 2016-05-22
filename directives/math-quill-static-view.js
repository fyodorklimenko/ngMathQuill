(function () {
    'use strict';
    angular.module('app')
        .directive('mathQuillStaticView', function () {
            return {
                restrict: 'A',
                scope: {
                    value: '@',
                },
                link: function (scope, element) {
                    var element = $(element);
                    element.html(scope.value);
                    MathQuill.getInterface(2).StaticMath($(element)[0]);
                }
            }
        })
})();