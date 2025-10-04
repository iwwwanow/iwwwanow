<script lang="ts">
	const PORTFOIO_URL = 'https://iwwwanowwwwwww.ru';
</script>

<!-- TODO naming -->

<div class="photo-container">
	<h1>photo</h1>
</div>
<hr class="wrapper-hr" />
<div class="work-data-container">
	<a href="/resume"><h1>resume</h1></a>
	<a href="/cv"><h1>cv</h1></a>
	<a href={PORTFOIO_URL} target="_blank"><h1>portfolio</h1></a>
</div>
<hr class="wrapper-hr" />
<div class="social-container">
	<a href="/resume"><h2>telegram</h2></a>
	<a href="/resume"><h2>github</h2></a>
	<a href="/resume"><h2>linkedin</h2></a>
	<a href="/resume"><h2>head hunter</h2></a>
	<a href="/resume"><h2>habr</h2></a>
</div>

<style>
	.work-data-container {
		display: flex;
		flex-direction: column;

		gap: 4px;
	}

	.social-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		gap: 16px;
	}

	.wrapper-hr {
		border: none;
		border-bottom: 1px solid lightgray;
	}
</style>
