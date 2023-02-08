<script>
	export let todo;
	import { getTodo } from '../../store/TodoStore';

	function updateModalContent(title, text) {
		const modalBox = document.getElementById('modalContent');
		modalBox.innerHTML = `
    <h1>${title}</h1>
    <p>${text}</p>
  `;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<label
	for="view-modal"
	class="btn btn-info btn-sm"
	on:click={() => {
		getTodo();
		let title = todo.title;
		let text = todo.text;
		updateModalContent(title, text);
	}}>view task</label
>
