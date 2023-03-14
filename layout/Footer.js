import { Container } from "react-bootstrap";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<Container
			as="footer"
			style={{
				color: "grey",
			}}
		>
			<hr />
			<p className="text-center mb-0 pb-3">
				development, content & images &copy; {"2022-" + currentYear.toString()}{" "}
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
