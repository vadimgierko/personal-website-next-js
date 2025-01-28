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
		<Link href={props.href}>
			<a>{props.children}</a>
		</Link>
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

// Component mentioned below can get & render a markdown from a md file:
// (but it works only in CodeSandbox don't know why...)

// export default function MarkdownRenderer({ markdown, fileReference }) {
// 	const [content, setContent] = useState(null);

// 	function fetchMarkdownFromFile(fileReference) {
// 		import(fileReference).then((res) => {
// 			fetch(res.default)
// 				.then((res) => res.text())
// 				.then((res) => setContent(res));
// 		});
// 	}

// 	useEffect(() => {
// 		if (fileReference && !markdown) {
// 			fetchMarkdownFromFile(fileReference);
// 		}

// 		if (markdown && !fileReference) {
// 			setContent(markdown);
// 		}
// 	}, [fileReference, markdown]);

// 	if (!content) return null;

// 	return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />;
// }
