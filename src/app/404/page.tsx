import Link from "next/link";
import { Button, Container } from "react-bootstrap";

export default function Custom404() {
	return (
		<Container
			style={{
				maxWidth: 500,
				textAlign: "center",
				margin: "auto",
			}}
		>
			<h1 style={{ fontSize: 80 }}>Ooops...</h1>
			<h2>
				The page you&apos;re looking for doesn&apos;t exist anymore or never
				existed.
			</h2>
			<p>
				This may be the link to my old website page, like article or category...
				Please consider visiting <Link href="/">Home Page</Link> instead!
			</p>
			<Link href="/" passHref>
				<Button variant="primary" className="mt-3">
					Visit Home Page
				</Button>
			</Link>
		</Container>
	);
}
