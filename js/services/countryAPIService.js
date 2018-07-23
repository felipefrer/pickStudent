angular.module('pickStudent').service('countryAPI', function ($http, config) {
    
    var _getCountries = function () {

        var country = {"name":"Belgium"};
        return $http.get(config.hoxWiBaseUrl + 'getCountry', country);
    };

    return {
        
        getCountries: _getCountries
    };
});