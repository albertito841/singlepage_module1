(
    function() {
        'use strict';
        angular.module('LunchCheck', [])

        .controller('LunchCheckController', 
                    function($scope) {
                        $scope.name = "Alberto";
                        $scope.sayHello = function() {
                            return "Hola Coursera";
                        };
                    }
        );
    }
) ();