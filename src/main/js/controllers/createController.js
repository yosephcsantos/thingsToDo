angular.module('codebetter.controllers.createController', [
	'codebetter.services.thingsToDoService',
	'ui.router'
])
.controller('createController', function($scope, $state, thingsToDoService){
	var self = this;

	self.initializer = function initializer(){
		self.thingsService = thingsToDoService;
		self.setNewTask();
		self.setScopeFunctions();
	};

	self.setNewTask = function setNewTask () {
		var timestampReg = new Date();
		$scope.optionsPriority = [
			'low', 'average', 'high', 'critical'
		];
		$scope.newTask = {
			task: null,
			priority: $scope.optionsPriority[0],
			note: null,
			type: 'toDo',
			dataRegistered: timestampReg.getTime()
		};
	};

	self.setScopeFunctions = function setScopeFunctions(){
		$scope.createTask = createTask;
	};

	function createTask (taskCreated) {
		if(taskCreated.type === 'monthly')
			self.thingsService.createTaskMonthly(taskCreated);
		else
			self.thingsService.createTaskToDo(taskCreated);
		
		$state.go('things');
	}

	return self.initializer();
});
