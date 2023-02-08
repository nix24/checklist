<script>
	export let todo;
	import { deleteTodo } from '../../store/TodoStore';
</script>

<button class="btn btn-error btn-sm" on:click={() => deleteTodo(todo.id)}> Delete </button>
