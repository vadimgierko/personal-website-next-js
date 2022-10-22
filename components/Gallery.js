import { Col, Row } from "react-bootstrap";

export default function Gallery({ images }) {
	if (!images) return null;

	const Img = ({ src }) => (
		<img src={src} width="100%" className="mb-3" alt="" />
	);

	return (
		<Row>
			<Col>
				{Object.keys(images)
					.slice(0, Object.keys(images).length / 2 + 1)
					.map((key, i) => (
						<Img key={key} src={images[key].default.src} />
					))}
			</Col>
			<Col>
				{Object.keys(images)
					.slice(Object.keys(images).length / 2 + 1)
					.map((key, i) => (
						<Img key={key} src={images[key].default.src} />
					))}
			</Col>
		</Row>
	);
}
