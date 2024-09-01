<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  todo: Object,
});

const emit = defineEmits(["onToggle", "removeTodo"]);

const isCompleted = computed(()=>props.todo.completed);

const onToggle = () => {
  emit("onToggle", props.todo.id);
};

const removeTodo = ()=>{
	emit("removeTodo", props.todo.id);
}
</script>

<template>
  <div :class="[{ completed: isCompleted }, 'todo']">
    <div>
		<input type="checkbox" v-model="isCompleted" @change="onToggle" style="margin-right: 10px;" />
    	<span>{{ todo.todo }}</span>
	</div>
	<i class='far fa-trash-alt dlt-todo' v-if="isCompleted" style='font-size:1em' @click="removeTodo"></i>
  </div>
</template>

<style scoped>
.completed {
  background-color: #FFF6E9;
}

.dlt-todo{
	cursor: pointer;
}

.todo {
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
	border: 1px solid black;
	padding: 30px 10px;
}

</style>
