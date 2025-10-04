import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import showdown from 'showdown';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const load: PageServerLoad = async ({params}) => {
	const filename = `${params.slug}.md`
	const converter = new showdown.Converter()
	const currentDir = dirname(fileURLToPath(import.meta.url));
	const filePath = join(currentDir, filename);

	try {
		const text = await readFile(filePath, 'utf8');
		const html = converter.makeHtml(text);

		if (html) {
			return { html }
		}
	} catch (err) {
		console.error('Ошибка чтения файла:', err);
	}


	error(404, 'Not found');
};
