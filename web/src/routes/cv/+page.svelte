<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { html } = data;
</script>

{@html html}
