import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const getPosts = async () => {
		try {
			const posts = structuredClone(await locals.pb.collection('posts').getFullList(undefined));
			return posts;
		} catch (error) {
			console.log('Error: ', error);
		}
	};

	return {
		posts: getPosts()
	};
};
