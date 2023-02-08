<script>
	import { addTodo } from '../../store/TodoStore';
</script>

<section>
	<label for="add-modal" class="btn btn-primary">Add Task</label>

	<input type="checkbox" id="add-modal" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box">
			<h1>Add Task</h1>
			<form>
				<div class="form-control">
					<label for="title" class="label">
						<span class="label-text">Title</span>
					</label>
					<input type="text" id="title" placeholder="Title" class="input input-bordered" />
				</div>
				<div class="form-control">
					<label for="todo" class="label">
						<span class="label-text">Todo</span>
					</label>
					<input type="text" id="todo" placeholder="Todo" class="input input-bordered" />
				</div>
				<div class="form-control">
					<button
						type="submit"
						class="btn btn-primary"
						on:click={() => {
							//if empty, do not add
							if (
								document.getElementById('title').value === '' ||
								document.getElementById('todo').value === ''
							) {
								return;
							}
							let title = document.getElementById('title').value;
							let text = document.getElementById('todo').value;
							addTodo(title, text);
							//reset the form
							document.getElementById('title').value = '';
							document.getElementById('todo').value = '';
						}}>Add Task</button
					>
				</div>
			</form>

			<div class="modal-action">
				<label for="add-modal" class="btn btn-error">Close</label>
			</div>
		</div>
	</div>
</section>
