import { useRouter } from "next/router";
import Layout from "../../layout";
import Container from "react-bootstrap/Container";
import { fieldsOfInterests } from "../../content/fieldsOfInterests";

export default function Page({ pageContent }) {
	const router = useRouter();
	const { slug } = router.query;

	console.log("slugs:", getAllSlugs());
	console.log("page content for", slug, getPageContent(slug));

	return (
		<Layout>
			<Container className="article py-3" style={{ maxWidth: 900 }}>
				<h1>{pageContent.title}</h1>
			</Container>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const pageContent = getPageContent(params.slug);
	return {
		props: {
			pageContent,
		},
	};
}

function getAllSlugs() {
	let slugs = [];
	fieldsOfInterests.forEach((field) =>
		slugs.push({ params: { slug: field.link } })
	);
	return slugs;
}

function getPageContent(slug) {
	const content = fieldsOfInterests.find((field) => field.link === "/" + slug);
	console.log("content:", content);
	return {
		slug,
		content,
	};
}
