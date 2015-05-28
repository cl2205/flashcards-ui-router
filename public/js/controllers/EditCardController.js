app.controller('EditCardController', function ($scope, $stateParams, FlashCardsFactory, $state) {
	$scope.cardToManage = FlashCardsFactory.cardToManage;

	$scope.onEditPage = true;

	$scope.card = FlashCardsFactory.cardToManage;

	$scope.pageObjective = 'edit'

	$scope.submitCard = function(card){
		//FlashCardsFactory.updateCard
	}
});