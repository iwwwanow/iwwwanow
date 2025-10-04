<script lang="ts">
	import faviconAppleTouch from '$lib/assets/favicon/apple-touch-icon.png';
	import favicon32 from '$lib/assets/favicon/favicon-32x32.png';
	import favicon16 from '$lib/assets/favicon/favicon-16x16.png';
	import siteWebmanifest from '$lib/assets/favicon/site.webmanifest';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={faviconAppleTouch}>
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32}>
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16}>
	<link rel="manifest" href={siteWebmanifest}>
</svelte:head>

<div class="root-wrapper">
	<div class="wrapper">
		{@render children?.()}
	</div>
</div>

<style>
	.root-wrapper {
		width: 100%;
		padding: 40px 16px 80px;

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
