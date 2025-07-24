import { Container } from "react-bootstrap";

export default function Section({ children = "" }) {
	if (!children) return null;

	return (
		<section>
			<Container className="py-3" style={{ maxWidth: 900 }}>
				{children}
			</Container>
		</section>
	);
}
