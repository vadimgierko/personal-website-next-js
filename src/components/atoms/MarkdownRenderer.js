import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";

// convert all internal links into React Router link,
// open external links in the new tab,
// scroll to top after internal redirecting:
function NextLink(props) {
	return props.href.match(/^(https?:)?\/\//) ? (
		<a href={props.href} target="_blank" rel="noreferrer">
			{props.children}
		</a>
	) : (
		<Link href={props.href}>{props.children}</Link>
	);
}

export default function MarkdownRenderer({ markdown }) {
	if (!markdown) return null;

	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[
				// enables rendering HTML tags:
				rehypeRaw,
				// emables code highlighting:
				rehypeHighlight,
			]}
			components={{ a: NextLink }}
		>
			{markdown}
		</ReactMarkdown>
	);
}
