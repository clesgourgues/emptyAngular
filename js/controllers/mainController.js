angular.module('app').controller("mainController", ['$scope', function ($scope) {
    $scope.message = "merci de saisir les informations demandées";
    $scope.reset = function () {
        $scope.nom = "";
        $scope.prenom = "";
        $scope.email = "";
        $scope.name = "";
        $scope.firstname = "";
        $scope.mail = "";
    };
    $scope.validate = function () {
        $scope.name = $scope.nom;
        $scope.firstname = $scope.prenom;
        $scope.mail = $scope.email;
    };
}]);



