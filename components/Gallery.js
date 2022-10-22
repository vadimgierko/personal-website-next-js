import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function Gallery({ images }) {
	const [show, setShow] = useState(false);
	const [modalSrc, setModalSrc] = useState();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	if (!images) return null;

	const Img = ({ src }) => (
		<img
			src={src}
			width="100%"
			className="mb-3"
			alt=""
			onClick={() => {
				setModalSrc(src);
				handleShow();
			}}
		/>
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
			<Modal show={show} onHide={handleClose} size="lg">
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<img src={modalSrc} alt="" width="100%" />
				</Modal.Body>
				{/* <Modal.Footer>Modal footer</Modal.Footer> */}
			</Modal>
		</Row>
	);
}
