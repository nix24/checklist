<script>
	import { todos } from '../../store/TodoStore';
	import DeleteTodo from './DeleteTodo.svelte';
	import ToggleTodo from './ToggleTodo.svelte';
	import ViewTask from './ViewTask.svelte';
	import { onMount } from 'svelte';

	let searchTerm = '';
	let filteredTodos = [];

	onMount(async () => {
		todos.subscribe((todos) => {
			filteredTodos = todos;
		});
	});

	function filterTodos(todos, term) {
		return todos.filter((todo) => {
			return todo.title.toLowerCase().includes(term.toLowerCase());
		});
	}

	//update the filtered todos when the search term changes
	$: filteredTodos = filterTodos($todos, searchTerm);
</script>

<section>
	<!--search bar for todo list-->
	<div class="mb-4">
		<input
			type="text"
			class="form-control w-full"
			placeholder="Search for a todo"
			bind:value={searchTerm}
		/>
	</div>

	<table class="table table-auto table-compact table-zebra">
		<thead>
			<tr>
				<th>Todo</th>
				<th>Completed</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<!-- if no todos are found, display message, no todos, please add some :) -->
			{#if filteredTodos.length === 0}
				<tr>
					<td class="no-task-msg" colspan="3">No tasks found :(</td>
				</tr>
			{/if}
			{#each filteredTodos as todo (todo.id)}
				<tr>
					<td>
						<!--implementing check form-->
						<ToggleTodo {todo} />
					</td>
					<td class="completed">
						<!--change border bg of p tag based on if true or not, keep within td-->
						{#if todo.completed}
							<p class="bg-success border-success border-2 rounded-md p-1">Completed</p>
						{:else}
							<p class="bg-error border-error border-2 rounded-md p-1">Not Completed</p>
						{/if}
					</td>
					<td class="actions">
						<!--view todo button that opens modal with the todo.todo and todo.title -->
						<ViewTask {todo} />
						<input type="checkbox" id="view-modal" class="modal-toggle" />
						<div class="modal">
							<div class="modal-box container mx-auto">
								<div id="modalContent" />
								<div class="modal-action">
									<label for="view-modal" class="btn">Close</label>
								</div>
							</div>
						</div>
						<DeleteTodo {todo} />
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
