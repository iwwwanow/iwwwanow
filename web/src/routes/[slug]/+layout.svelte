<script lang="ts">
	let { children, params } = $props();
</script>

<div class="header-container">
	<span><a href="/">home</a></span>
	<span>/</span>
	<span>{params.slug}</span>
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
