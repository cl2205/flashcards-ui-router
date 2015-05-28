app.controller('DeleteCardController', function($scope, $stateParams, FlashCardsFactory, $state) { //will get parameters from all parent states
	// $state is like  a factory on the ui-router
	$scope.deleteCard = function() {
		FlashCardsFactory.deleteCardById($stateParams.cardId).then(function() {
			$state.go('home'); //when this gets called, go to that state
		});
	};

	
});