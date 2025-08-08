import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import MarkdownRenderer from "../atoms/MarkdownRenderer";
import { Article as IArticle } from "@/types";

export default function Article({ article }: { article: IArticle }) {
	return (
		<Container className="article py-3" style={{ maxWidth: 900 }}>
			<header className="text-center">
				<h1>{article.metadata.title}</h1>
				<hr />
				<p>{article.metadata.description}</p>
				{article.metadata.img.src && (
					<Image
						src={article.metadata.img.src}
						alt={article.metadata.img.alt}
						fluid
					/>
				)}
			</header>
			<MarkdownRenderer markdown={article.props.content} />
		</Container>
	);
}
