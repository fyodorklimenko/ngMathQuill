(function () {
    'use strict';
    angular.module('app')
        .directive('mathQuillEdit', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {
                    ngModel: '=',
                },
                link: function (scope, element, attrs, ngModel) {
                    var MQ = MathQuill.getInterface(2);
                    var mq = MQ.MathField($(element)[0], {
                        handlers: {
                            edit: function () {
                                if (mq) {
                                    scope.ngModel = mq.latex();
                                    console.log(scope.ngModel)
                                }
                            },
                        },
                    });
                },
            }
        });
})();