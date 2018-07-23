angular.module("pickStudent").config(function ($sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://dub.hoxwi.com/Wi/PK-b9e1c985d6fe4e1291aa119d546c0b562018JFK/**'
    ]);
});