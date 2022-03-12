import { Message } from '.';

export interface Post {
	id: string;
	title: string;
	description: string;
	images?: Array<string>;
	author: string;
	county: string;
	upvotes: number;
	messages: Array<Message>;
	createdDate: string;
}
