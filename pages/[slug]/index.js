import { useRouter } from "next/router";
import Layout from "../../layout";
import Container from "react-bootstrap/Container";

export default function Page() {
	const router = useRouter();
	const { slug } = router.query;

	return (
		<Layout>
			<Container className="article py-3" style={{ maxWidth: 900 }}>
				This is {slug} page.
			</Container>
		</Layout>
	);
}
