import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import showdown from 'showdown';

export const load: PageServerLoad = async ({ params }) => {

	try {
		const converter = new showdown.Converter()
		const content = await import(`../../../static/content/${params.slug}.md?raw`);
		const text = content.default
		const html = converter.makeHtml(text);

		if (html) {
			return { html }
		}
	} catch (err) {
		console.error('Ошибка чтения файла:', err);
	}


	error(404, 'Not found');
};
