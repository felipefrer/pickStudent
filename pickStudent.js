angular.module('pickStudent', []);
angular.module("pickStudent").controller("pickStudentCtrl", function ($scope) {

    $scope.App = "Pick Student Randomly";
    $scope.countries = [
        { name: "Brazil", code: "br" },
        { name: "Italia", code: "it" },
        { name: "Espanha", code: "ep" },
        { name: "Russia", code: "rs" },
        { name: "Japan", code: "jp" }
    ];
    $scope.students = [
        { name: "Felipe", country: { name: "Brazil", code: "br" } },
        { name: "Nayane", country: { name: "Brazil", code: "br" } },
        { name: "Juliane", country: { name: "Brazil", code: "br" } },
        { name: "Isabelle", country: { name: "Brazil", code: "br" } },
        { name: "Iocaro", country: { name: "Japan", code: "jp" } },
    ];

    $scope.AddStudent = function (student) {

        $scope.students.push(student);
        delete $scope.student;
    }
});
