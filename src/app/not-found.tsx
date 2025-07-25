import Link from "next/link";
import { Button, Container } from "react-bootstrap";

/**
 * Handles global unmatched URLs.
 */
export default function NotFound() {
	return (
		<Container
			style={{
				maxWidth: 500,
				textAlign: "center",
				margin: "auto",
			}}
		>
			<h1 style={{ fontSize: 80 }}>Ooops... 4️⃣0️⃣4️⃣</h1>
			<h2>
				<strong>EN:</strong> The page you&apos;re looking for doesn&apos;t exist anymore or never
				existed...
                <hr />
                <strong>PL:</strong> Strona, której szukasz, już nie istnieje lub nigdy nie istniała...
			</h2>
			<p>
				<strong>EN:</strong> This may be the link to my old website page, like article or category...
				Please consider visiting <Link href="/">Home Page</Link> instead!
                <br />
                <strong>PL:</strong> To może być link do mojej starej strony www, np. artykułu lub kategorii...
                Zapraszam na stronę główną <Link href="/">Home Page</Link>!
			</p>
			<Link href="/" passHref>
				<Button variant="primary" className="mt-3">
					Visit Home Page | Odwiedź Stronę główną
				</Button>
			</Link>
		</Container>
	);
}
