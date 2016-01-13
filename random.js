if (Meteor.isClient) {
  // This code only runs on the client
  angular.module('random', ['angular-meteor']);
  angular.module('random').controller('RandomCtrl', ['$scope', '$anchorScroll', '$location',
    function($scope, $anchorScroll, $location) {
      $scope.numbers = [];

      /**
       * Get a random integer between `min` and `max`.
       * 
       * @param {number} min - min number
       * @param {number} max - max number
       * @return {int} a random integer
       */
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      $scope.generateNumbers = function() {
        var newNumber = {
          white: [],
          red: ""
        };
        var newArray = [];
        while (newArray.length < 5) {
          var rn = getRandomInt(1, 69);
          if (newArray.indexOf(rn) === -1) {
            newArray.push(rn);
          }
        }
        newNumber.white = newArray;
        newNumber.red = getRandomInt(1, 26);
        $scope.numbers.push(newNumber);

        $location.hash('bottom');
        $anchorScroll();
      };
    }
  ]);
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
