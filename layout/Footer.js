import { Container } from "react-bootstrap";

export default function Footer() {
	return (
		<Container
			as="footer"
			style={{
				color: "grey",
			}}
		>
			<hr />
			<p className="text-center mb-0 pb-3">
				&copy; 2022{" "}
				<a
					href="https://github.com/vadimgierko"
					target="_blank"
					rel="noreferrer"
					style={{ textDecoration: "none" }}
				>
					Vadim Gierko
				</a>
			</p>
		</Container>
	);
}
