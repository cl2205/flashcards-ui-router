app.directive('cardForm', function (FlashCardsFactory){

	return {
		restrict: 'E',
		templateUrl: 'js/directives/card-form/card-form.html',
		link: function(scope){
		    // scope.card = scope.newCard
		}
	}//end return
})