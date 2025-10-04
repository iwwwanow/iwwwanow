<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="root-wrapper">
	<div class="wrapper">
		{@render children?.()}
	</div>
</div>

<style>
	.root-wrapper {
		width: 100%;
		padding: 240px 16px 480px;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;

		gap: 16px;

		max-width: 210mm;
		width: 100%;

		padding: 36px 16px 12px;

		border: 2px lightgray solid;
	}
</style>
