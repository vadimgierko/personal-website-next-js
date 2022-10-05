import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import MarkdownRenderer from "./MarkdownRenderer";

export default function Article({ article }) {
	return (
		<Container className="article py-3" style={{ maxWidth: 900 }}>
			<header>
				<h1 className="text-center">{article.title}</h1>
				<hr />
				<p className="text-center">{article.description}</p>
				<Image src={article.img.src} alt={article.img.alt} fluid />
			</header>
			<MarkdownRenderer markdown={article.content} />
		</Container>
	);
}
