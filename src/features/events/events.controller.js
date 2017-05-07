export default function EventsController($rootScope, $scope, $http, $location, $uibModal) {
    let user = undefined;
    if (!$scope.selectedUser) {
        $scope.selectedUser = $rootScope.globals.currentUser;
        $scope.currentNavItem = "events";
    }
    user = $scope.selectedUser;

    $scope.username = user.username;
    $scope.events = [];

    function events () {
        $http.get("/api/events")
            .then(function (response) {
                $scope.events = response.data;
                console.log("Hi events", $scope);
            }, function (error) {
                console.log(error);
            });
    }

    events();
}