(function () {
    'use strict';
    angular.module('app')
        .directive('mathQuillEdit', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModelCtrl) {
                    var MQ = MathQuill.getInterface(2);
                    var jElement = $(element)[0];

                    var mathField= MQ.MathField(jElement, {
                        handlers: {
                            edit: function () {
                                if (mathField) {
                                    ngModelCtrl.$setViewValue(mathField.latex());
                                }
                            },
                        },
                    });

                    ngModelCtrl.$formatters.push(function(modelValue) {
                        if (modelValue) {
                            mathField.latex(modelValue);
                        }
                    });
                },
            }
        });
})();