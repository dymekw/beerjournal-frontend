export default class CollectionsController {
    constructor($scope, $mdDialog) {
        this.name = 'Hello';
        $scope.currentNavItem = 'bottles';
        $scope.showPrompt = function(event) {
            var confirm = $mdDialog.prompt()
                .title('Choose file')
                .placeholder('File')
                .targetEvent(event)
                .ok('Submit')
                .cancel('Cancel');
            $mdDialog.show(confirm);
        }
    }
}