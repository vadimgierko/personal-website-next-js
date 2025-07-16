import { useTheme } from "../../contexts/useTheme";
// react-bootstrap:
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// next.js:
import Link from "next/link";

export default function CustomCard({ item = {}, left = true, linkText = "" }) {
	const { theme } = useTheme();

	return (
		<Card
			className={`mb-3 p-3 shadow bg-${theme} text-${
				theme === "light" ? "dark" : "light"
			}`}
		>
			{item.img.src ? (
				<Row>
					{left && (
						<Col md={6} sm={7}>
							<Card.Img src={item.img.src} />
						</Col>
					)}
					<Col>
						<Card.Body
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								height: "100%",
							}}
						>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>{item.description}</Card.Text>
							<Link href={item.link}>{linkText}</Link>
						</Card.Body>
					</Col>
					{!left && (
						<Col md={6} sm={7}>
							<Card.Img src={item.img.src} />
						</Col>
					)}
				</Row>
			) : (
				<Card.Body
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						height: "100%",
					}}
				>
					<Card.Title>{item.title}</Card.Title>
					<Card.Text>{item.description}</Card.Text>
					<Link href={item.link}>{linkText}</Link>
				</Card.Body>
			)}
		</Card>
	);
}
