<script>
	import AddTodoSection from '../lib/components/todo/AddTodoSection.svelte';
	import TodoSection from '../lib/components/todo/TodoSection.svelte';
	import { deleteAll } from '../lib/store/TodoStore';
</script>

<!-- !-- creating title header for todo called todo. center the h1 within the div -->
<div
	class="bg-primary rounded-[20px] shadow-lg outline outline-4 outline-base-200 outline-offset-[-10px]"
>
	<h1 class="font-bold text-base-content text-center py-4">Todo-List</h1>
</div>
<div class="divider" />
<!-- dashbar that contains the add todo section, delete all todos, and the todo list in a table style using daisyui and tailwindcss
only add addTodo button and the Todo items and use placeholders for the rest -->

<div class="dashbar">
	<div class="dashbar-actions">
		<AddTodoSection />
		<button
			class="btn btn-error"
			on:click={() => {
				deleteAll();
			}}>Delete All</button
		>
	</div>
	<div class="divider" />
	<div class="dashbar-content">
		<TodoSection />
	</div>
</div>
