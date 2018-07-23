angular.module('pickStudent').filter('myDate', function () {

    return function (input) {

        if(!isNaN(input.substring(input.length-1, 1)))
        {
            input = "It is not a number";
        }
        
        return input;
    };
});