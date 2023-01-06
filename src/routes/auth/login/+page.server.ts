import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/dashboard');
	}

	return {};
};

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};

		try {
			await locals.pb.collection('admins').authWithPassword(data.email, data.password);
		} catch (err) {
			console.error(err);
			throw err;
		}

		throw redirect(303, '/dashboard');
	}
};
