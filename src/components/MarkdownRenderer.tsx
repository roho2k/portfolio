import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { memo } from 'react';
import { CodeProps } from 'react-markdown/lib/ast-to-react';

export interface MarkdownRendererInterface {
	content: string;
}

export default memo(function MarkdownRenderer({
	content,
}: MarkdownRendererInterface) {
	return (
		<ReactMarkdown
			children={content}
			remarkPlugins={[remarkGfm]}
			components={{
				code({ inline, className, children, ...props }: CodeProps) {
					const match = /language-(\w+)/.exec(className || '');
					return !inline && match ? (
						<SyntaxHighlighter
							children={String(children).replace(/\n$/, '')}
							language={match[1]}
							PreTag='div'
							showLineNumbers={true}
							useInlineStyles={true}
							{...props}
							style={oneDark}
						/>
					) : (
						<code
							className={className}
							{...props}
						>
							{children}
						</code>
					);
				},
			}}
		/>
	);
});
