"use client";
// react-bootstrap:
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// next.js:
import Link from "next/link";
import { Item } from "@/types";

export default function CustomCard({
	item,
	left = true,
	linkText = "",
}: {
	item: Item;
	left: boolean;
	linkText: string;
}) {
	return (
		<Card className="mb-3 p-3 shadow">
			{item.metadata.img.src ? (
				<Row>
					{left && (
						<Col md={6} sm={7}>
							<Card.Img src={item.metadata.img.src} />
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
							<Card.Title>{item.metadata.title}</Card.Title>
							<Card.Text>{item.metadata.description}</Card.Text>
							<Link href={item.metadata.link}>{linkText}</Link>
						</Card.Body>
					</Col>
					{!left && (
						<Col md={6} sm={7}>
							<Card.Img src={item.metadata.img.src} />
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
					<Card.Title>{item.metadata.title}</Card.Title>
					<Card.Text>{item.metadata.description}</Card.Text>
					<Link href={item.metadata.link}>{linkText}</Link>
				</Card.Body>
			)}
		</Card>
	);
}
