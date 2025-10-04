import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	assetsInclude: ['**/*.md'],
	plugins: [sveltekit()],
	server: {
		host: true,
		allowedHosts: [
			'.loca.lt',
		],
		hmr: {
			timeout: 30000
		}
	}
});
