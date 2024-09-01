<script setup>
import { ref } from "vue";
import TodoItem from './components/TodoItem.vue';

const isAddTodo = ref(false);
const todo = ref('');

const todos = ref([
	{
      "id": 1,
      "todo": "Do something nice for someone you care about asfdasdf asdfasdfa",
      "completed": false,
      "userId": 152
    },
    {
      "id": 2,
      "todo": "Memorize a poem",
      "completed": false,
      "userId": 13
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": false,
      "userId": 68
    }
]);

const handleToggle = (todoId)=>{
  // alert(todoId);
	const todo = todos.value.find(t=>t.id === todoId);
	if(todo){
		todo.completed = !todo.completed;
	}
}

const toggleAdd = ()=>{
	isAddTodo.value = !isAddTodo.value;
}

const handleRemove = (todoId)=>{
	const newTodos = todos.value.filter(todo=>todo.id !== todoId)
	todos.value = newTodos;
}

const addTodo = ()=>{
	const newtodo = {
		"id": 1,
		"todo": todo.value,
		"completed": false,
	}
	if(newtodo.todo !== ''){
		todos.value.push(newtodo);
		todo.value = '';
	}
	toggleAdd();
}
</script>

<template>
	<div class="todo-heading">
		<p>Todo List</p>
	</div>

    <div class="todo-list">	
        <div v-for="(todo, index) in todos" class="todos">
            <TodoItem :todo="todo" key="todo.id" @onToggle="handleToggle" @removeTodo="handleRemove"/>
        </div>
		<button v-show="!isAddTodo" class="new-task" @click="toggleAdd">+ New Task</button>
    </div>
	
	<div v-show="isAddTodo" class="addTodo">
		<input type="text" v-model="todo">
		<button @click="addTodo">+</button>
	</div>
</template>

<style scoped>

	.todo-heading{
		background-color: #7E30E1;
		padding: 10px;
		font-weight: bolder;
		text-align: center;
		margin-bottom: 10px;
	}
	.todo-list{
		background-color: #F9F6EE;
		color: #242424;
		width: 500px;
		position: relative;
	}

	.addTodo{
		margin-top: 20px;
	}

	.addTodo input{
		border: none;
		outline: none;
		background-color: #FFF6E9;
		padding: 10px 20px;
		margin-right: 10px;
		color: #242424;
	}

	.addTodo button{
		border-radius: 8px;
	}
	button{
		background-color: #7E30E1;
		padding: 10px 20px;
		border-radius: 50px;
		font-weight: bolder;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.new-task{	
		position: absolute;
		bottom: -20px;
		left: 195px;

	}


	
</style>