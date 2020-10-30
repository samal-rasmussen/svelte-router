<script>
  import { fly } from 'svelte/transition'
</script>

<style>
	div {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: rebeccapurple;
		color: white;
	}
</style>

<div transition:fly="{{ y: 800, duration: 300 }}">
	<h2>Overlay</h2>
</div>
