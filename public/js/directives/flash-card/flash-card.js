app.directive('flashCard', function (ScoreFactory, FlashCardsFactory) {

    return {
        restrict: 'E',
        templateUrl: 'js/directives/flash-card/flash-card.html',
        scope: {
            card: '=',
            hideManageButton: '='
        },
        link: function (scope) {

            scope.attachToFactory = function(card){
                FlashCardsFactory.cardToManage = card
            }

            scope.answered = false;
            scope.answeredCorrectly = null;

            scope.answerQuestion = function (answer) {

                if (scope.answered) {
                    return;
                }

                scope.answered = true;
                scope.answeredCorrectly = answer.correct;

                if (answer.correct) {
                    ScoreFactory.correct++;
                } else {
                    ScoreFactory.incorrect++;
                }

            };

        }

    };

});