import { useRouter } from "next/router";
// content:
import { fieldsOfInterests } from "../../content/fieldsOfInterests";
// custom components:
import Layout from "../../layout";
import FieldOfInterests from "../../components/FieldOfInterests";
// lib:
import getAllSlugs from "../../lib/getAllSlugs";
import getPageContent from "../../lib/getPageContent";

export default function Page({ pageContent }) {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<Layout>
			<FieldOfInterests field={pageContent} />
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
	return {
		props: {
			pageContent: getPageContent(params.slug),
		},
	};
}
