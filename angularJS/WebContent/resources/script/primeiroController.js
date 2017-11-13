

var app = angular.module('loja', ['ngRoute']);

//Config - > Usado para registrar o trabalgo que precisa ser executado no carregamento do módulo

//when -> Adiciona uma nova definição de rota ao serviço $ route

app.config(function($routeProvider){
	$routeProvider
	.when("/", {controller: "listController", templateUrl: "list.html"}) // listar
	.when("/edit/:name", {controller: "editController", templateUrl: "form.html"}) // editar
	.when("/new", {controller: "newController", templateUrl: "form.html"}) // novo
	.otherwise({redirecTo: "/"});
	
});

//Registro de trabalho d=que deve ser realizado quando o injetor é feito carregando todos os módulos
app.run(function($rootScope){
	$rootScope.frutas = ['banana', 'melancia','pera'];
})

app.controller('listController', ['$scope', function($scope){
	
}]);

app.controller('editController', ['$scope','$routeParams', '$rootScope', '$route', '$location',
     function editController($scope, $routeParams, $rootScope, $route, $location){
	
	$scope.title = 'Editar frutas';
	$scope.fruta = $routeParams.name; // pega o nome da fruta para editar
	$scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);
	
	$scope.salvar = function(){
		$scope.frutas[$scope.frutaIndex] = $scope.fruta; // pega o novo nome da fruta editada
		$location.path('/');//volta para o index
	};
}]);

app.controller('newController', ['$scope', '$routeParams', '$rootScope', '$route', '$location',
    function newController($scope, $routeParams, $rootScope, $route, $location){
	$scope.title = 'Nova Fruta';
	$scope.fruta = '';
	
	$scope.salvar = function(){
		$scope.frutas.push($scope.fruta); // add nova fruta
		$location.path('/');//volta para o index
	};
}]);
