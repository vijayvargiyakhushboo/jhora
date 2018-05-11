angular
  .module('jhora', ['ngMaterial', 'ngMessages'])
  .controller('customerCtrl', function($scope) {
    $scope.villages = ['Daniyari', 'Gadahia Mohan'];
    $scope.selectedIndex = 0;
    $scope.tabs = [{title:'Customer', content:'customer.html'}, {title:'Customer View', content:'customerView.html'}];
    $scope.customer = {
      name: 'Addu',
      mobile: '9738275930',
      address: 'Daniyari',
      fathersName: 'Pita G',
      guarantor: 'Naresh',
      date: new Date(),
      pageNo: '1',
      remarks: 'Some big natural remarks here!'
    };
    
    $scope.resetCustomer = function(){
      $scope.customer ={};
    };
    
    $scope.submitCustomer = function(){
      console.log('anp customer', $scope.customer);
    };
    
  })
  .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });