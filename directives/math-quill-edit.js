(function () {
    'use strict';
    angular.module('app')
        .directive('mathQuillEdit', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModelCtrl) {
                    var mq = MathQuill.getInterface(2).MathField($(element)[0], {
                        handlers: {
                            edit: function () {
                                if (mq) {
                                    ngModelCtrl.$setViewValue(mq.latex());
                                }
                            },
                        },
                    });

                    scope.$watch(function() { return ngModelCtrl; }, function(nv) {
						if (nv.$viewValue) {
                            mq.write(nv.$viewValue);
                        }
                    });
                },
            }
        });
})();