'use strict';
angular.module('ShoppingList.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, storage) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('ItemCtrl', function ($scope, $ionicPopup, storage) {
 $scope.items = [
 {days: 2, name:'Koobi'},
 {days: 1, name: 'Bankye'}
 ];
 // binding it to a $scope.variable (minimal)
storage.bind($scope,'varName');
// will constantly be updating $scope.viewType
// to change the variable both locally in your controller and in localStorage just do
$scope.viewType = 'ANYTHING';
// that's it, it will be updated in localStorage
   // Triggered on a button click, or some other target
   // just storing something in localStorage with cookie backup for unsupported browsers
storage.set('key','value');
// getting that value
storage.get('key');

// clear all localStorage values
storage.clearAll();


$scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.name">',
    title: 'Enter name for list',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.name) {
            //don't allow the user to close unless he enters name password
            e.preventDefault();
          } else {
            return $scope.data.name;
          }
        }
      },
    ]
  });
  myPopup.then(function(res) {
    $scope.items.push({id:$scope.items.length, name: res})
  });
 };

})

.controller('ShoppingListsCtrl', function ($scope, $ionicPopup, storage) {
  $scope.lists = [
    {id:1, name: 'Melcom Shopping List'},
    {id:2, name: 'Makola'},
    {id:3, name: 'Agboglo'},
    {id:4, name: 'Kasoa'},
    {id:5, name: 'Mallam'},
    {id:6, name: 'Madina'},
    {id:7, name: 'Ebola'}
  ];

  // Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.name">',
    title: 'Enter name for list',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.name) {
            //don't allow the user to close unless he enters name password
            e.preventDefault();
          } else {
            return $scope.data.name;
          }
        }
      },
    ]
  });
  myPopup.then(function(res) {
    $scope.lists.push({id:$scope.lists.length, name: res})
  });
 };
});