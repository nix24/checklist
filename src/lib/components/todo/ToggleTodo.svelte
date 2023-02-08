<script>
	export let todo;
	import { toggleComplete } from '../../store/TodoStore';
</script>

<label class="check-and-title">
	<input type="checkbox" on:click={() => toggleComplete(todo.id)} />
	<i class="form-icon" />
	<p class="text-gray-700">{todo.title}</p>
</label>
