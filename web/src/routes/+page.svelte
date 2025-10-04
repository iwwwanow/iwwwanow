<script lang="ts">
	const PORTFOIO_URL = 'https://iwwwanowwwwwww.ru';
</script>

<!-- TODO naming -->
<div class="root-wrapper">
	<div class="wrapper">
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
			<a href="/resume"><h2>linkedin</h2></a>
			<a href="/resume"><h2>instagram</h2></a>
			<a href="/resume"><h2>x</h2></a>
			<a href="/resume"><h2>soundcloud</h2></a>
		</div>
	</div>
</div>

<style>
	.root-wrapper {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;

		gap: 16px;

		max-width: 210mm;
	}

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
		border: 1px solid grey;
	}
</style>
