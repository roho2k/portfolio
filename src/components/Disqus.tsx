import { DiscussionEmbed } from 'disqus-react';

export interface DisqusInterface {
	url?: string;
	identifier?: string;
	title?: string;
}

export default function Disqus({ url, identifier, title }: DisqusInterface) {
	return (
		<DiscussionEmbed
			shortname='rodney-ho'
			config={{
				url,
				identifier,
				title,
			}}
		/>
	);
}
