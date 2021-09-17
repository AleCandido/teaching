import path from 'path';

import { BLOG_PATH, getDirectories } from '$lib/blog';

export async function get() {
	const __dirname = path.resolve();
	const location = path.join(__dirname, BLOG_PATH);
	const years = await getDirectories(location);
	return { body: JSON.stringify({ years }) };
}
