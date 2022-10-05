import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ markdown }) {
	if (!markdown) return null;

	return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
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
