(function () {
    'use strict';
    angular.module('app')
        .directive('mathQuillEdit', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {
                    value: '=',
                },
                link: function (scope, element, attrs, ngModelCtrl) {
                    var vm = scope;
                    console.log(vm);
                    console.log(ngModelCtrl )

                    ngModelCtrl.$formatters.push(function(modelValue) {
                        return modelValue;
                    });

                    ngModelCtrl.$parsers.push(function(viewValue) {
                        return viewValue;
                    });

                    vm.$watch(function() { return vm.value; }, function(nv, ov) {
                        ngModelCtrl.$setViewValue(nv);
                    });

                    

                    var MQ = MathQuill.getInterface(2);
                    var mq = MQ.MathField($(element)[0], {
                        handlers: {
                            edit: function () {
                                if (mq) {
                                    vm.value = mq.latex();
                                    ngModelCtrl.$setViewValue(mq.latex());
                                }
                            },
                        },
                    });
                },
            }
        });
})();