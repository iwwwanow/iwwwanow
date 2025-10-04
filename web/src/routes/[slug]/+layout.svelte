<script lang="ts">
	let { children, params } = $props();
</script>

<div class="header-container">
	<a href="/"><h2>home</h2></a>
	<h2>{params.slug}</h2>
</div>
<hr class="wrapper-hr" />

{@render children?.()}

<style>
	.header-container {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
</style>
