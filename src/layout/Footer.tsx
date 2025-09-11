import { Domain } from "@/types";
import { Container } from "react-bootstrap";

export function Footer({
	beforeCopyText,
	initYear,
	links,
}: Domain["layout"]["footer"]) {
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
				{beforeCopyText} &copy; {initYear + "-" + currentYear.toString()}{" "}
				{links.external.map((externalLink) => (
					<a
						key={externalLink.href}
						href={externalLink.href}
						target="_blank"
						rel="noreferrer"
						style={{ textDecoration: "none" }}
					>
						{externalLink.value}
					</a>
				))}
			</p>
		</Container>
	);
}
