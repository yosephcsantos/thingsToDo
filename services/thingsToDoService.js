angular.module('codebetter.services.thingsToDoService', [])
.service('thingsToDoService', function($log){
	var self = {
		'getTask': function (task) {
			var tasksLength = self.tasks.length;
			for (var i = 0; i < tasksLength; i++) {
				var obj = self.tasks[i];
				if(obj.task == task) {
					return obj;
				}
			}
		},
		'tasks': [
			{
				'task': 'Estudar AngularJs',
				'priority': 'Critical',
				'note': 'Semana que vem já começo a trabalhar, tenho que estudar.',
				'dataRegistered': '16/11/2015'
			},
			{
				'task': 'Resposta da imobiliária Anagê',
				'priority': 'Critical',
				'note': 'Esperando resultado de análise dos meus documentos para aluguel.',
				'dataRegistered': '18/11/2015'
			},
			{
				'task': 'Comprar uma mochila',
				'priority': 'low',
				'note': 'Para carregar o notebook em segurança',
				'dataRegistered': '17/11/2015'
			},
			{
				'task': 'Prolongar data no hotel',
				'priority': 'Critical',
				'note': 'Depois da resposta da Anagê, ligar para Natália para prolongar os dias no hotel.',
				'dataRegistered': '18/11/2015'
			},
			{
				'task': 'Confirmar data de início no trampo',
				'priority': 'Critical',
				'note': 'Depois de entrar no apartamento confirmar data de início',
				'dataRegistered': '18/11/2015'
			}
		],
		'done': [
			{
				'task': 'Começar projeto Aprendizado em AngularJs',
				'priority': 'Critical',
				'note': 'Por em prática em conhecimento.',
				'dataRegistered': '16/11/2015'
			},
			{
				'task': 'Visitar apartamentos no Costa e Silva',
				'priority': 'regular',
				'note': 'Visitar para ter mais opções de escolha.',
				'dataRegistered': '12/11/2015'
			}

		],
		'addDone': function (task) {
			var taskDone = angular.copy(task);
			self.done.push(taskDone);
		},
		'removeToDo': function (index) {
			self.tasks.splice(index, 1);
		},
		'createTask': function (task) {
			var newTask = angular.copy(task);
			self.tasks.push(newTask);
		}
	};
	return self;
});