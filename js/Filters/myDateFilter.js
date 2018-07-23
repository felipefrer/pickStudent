angular.module('pickStudent').filter('myDate', function () {

    return function (input) {

        if(!isNaN(input.substr()))
        {
            console.log("It is not a number");
        }
        
        return input;
    };
});