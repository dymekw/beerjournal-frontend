export default function EventsController($rootScope, $scope, $http, $location, $uibModal,moment) {
    let user = undefined;
    if (!$scope.selectedUser) {
        $scope.selectedUser = $rootScope.globals.currentUser;
        $scope.currentNavItem = "events";
    }
    user = $scope.selectedUser;

    $scope.username = user.username;


    function events () {
        $http.get("/api/events")
            .then(function (response) {
                var events = response.data;
                $scope.events = [];
                events.forEach(function (event) {
                    event.date = moment(event.date).fromNow();
                    $scope.events.push(event);
                })
                console.log("Hi events", $scope);
            }, function (error) {
                console.log(error);
            });
    }

    events();
}