app.controller('NewCardController', function (
    $scope,
    FlashCardsFactory,
    $rootScope
) {

    $scope.submittingCard = false;
    $scope.pageObjective = 'add'

    $scope.card = {
        question: null,
        category: null,
        answers: [
            { text: null, correct: false },
            { text: null, correct: false },
            { text: null, correct: false }
        ]
    };

    $scope.submitCard = function (card) {
        $scope.submittingCard = true;
        
        FlashCardsFactory.addNewCard(card).then(function (newCard) {
            $rootScope.$broadcast('newCardAdded', newCard);
            $scope.submittingCard = false;
            $scope.newCard = {
                question: null,
                category: null,
                answers: [
                    { text: null, correct: false },
                    { text: null, correct: false },
                    { text: null, correct: false }
                ]
            };
        });
    };

});