angular.module('pickStudent').filter('name', function () {

    return function (input) {

        var output = input.toUpperCase();
        
        return output;
    };
});