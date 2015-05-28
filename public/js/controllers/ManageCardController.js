app.controller('ManageCardController', function($scope, $stateParams, FlashCardsFactory) {
	//$scope.card = FlashCardsFactory.cardToManage;
	FlashCardsFactory.getCardById($stateParams.cardId).then(function(card) {
		$scope.card = card;
	});
});

// inject stateParams