import fs from 'fs';
import yaml from 'js-yaml';

export const BLOG_PATH = 'src/routes/courses';

export function getProjectData({ year, project }) {
	const articles = [];

	// directories.forEach((element) => {
	// const contentPath = `${location}/${element}/index.md`;
	// if (fs.existsSync(contentPath)) {
	// const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
	// articles.push({ slug: element, content });
	// }
	// });
	// return articles;
}

export async function getDirectories(location) {
	const directories = fs
		.readdirSync(location)
		.filter(
			(element) => fs.lstatSync(`${location}/${element}`).isDirectory() && /^\d{4}$/.test(element)
		);

	let years = {};

	for (const dir of directories) {
		const dirLoc = `${location}/${dir}`;

		const subdirectories = fs
			.readdirSync(dirLoc)
			.filter((element) => fs.lstatSync(`${dirLoc}/${element}`).isDirectory())
			.map((element) => {
				try {
					// console.log(fs.readFileSync(`${dirLoc}/${element}/metadata.yaml`, 'utf8'))
					let content = yaml.load(fs.readFileSync(`${dirLoc}/${element}/metadata.yaml`, 'utf8'));
					content.project = element;
					return content;
				} catch (e) {
					return { title: element, project: element };
				}
			});
		years[dir] = subdirectories;
	}

	return years;
}
