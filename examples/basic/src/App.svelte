<script>
  import './router'
  import { RouterView, Link } from '@bjornlu/svelte-router'
</script>

<style>
	div.body {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	div.content {
		position: relative;
		overflow: hidden;
		flex-grow: 1;
	}
</style>

<div class="body">
  <Link to="/">Main</Link>
  <Link to="/overlay">Overlay</Link>

	<div class="content">
		<RouterView />
	</div>
</div>
