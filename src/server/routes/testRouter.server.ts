import { type APIType, responseStatus, getResponse } from '$api/root.server';

export default {
	testGet: async ({ ctx, input }) => {
		ctx.status = responseStatus.INTERNAL_SERVER_ERROR;

		let quote:
			| {
					text: string;
					quoteAuthor: string;
					apiAuthor: string;
			  }
			| undefined = undefined;
		try {
			const res = await fetch('https://type.fit/api/quotes');
			const data = (await res.json()) as any;
			// random number from 0-15
			const random = Math.floor(Math.random() * 15);
			const authorArray = data[random].author.split(', ');

			quote = {
				text: data[random].text,
				quoteAuthor: authorArray[0],
				apiAuthor: authorArray[1]
			};
			ctx.status = responseStatus.SUCCESS;
		} catch (e) {
			console.log('🚀 ~ testPost: ~ e:', e);
		}

		return getResponse(ctx.status, {
			[responseStatus.INTERNAL_SERVER_ERROR]: {
				message: ''
			},
			[responseStatus.SUCCESS]: {
				data: { quote },
				stores: {
					serverTime: {
						set: new Date().getMilliseconds()
					}
				}
			}
		});
	}
} satisfies APIType['testRouter'];
