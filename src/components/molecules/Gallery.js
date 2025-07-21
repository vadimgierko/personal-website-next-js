"use client";

import { useState } from "react";
// react-bootstrap:
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
			src={"/img/" + src}
			width="100%"
			className="mb-3"
			alt={src
				.replaceAll("-", " ")
				.replaceAll(".jpg", "")
				.replaceAll(".png", "")}
			onClick={() => {
				setModalSrc("/img/" + src);
				handleShow();
			}}
			style={{ cursor: "pointer" }}
		/>
	);

	return (
		<Row>
			<Col>
				{images
					.slice(
						0,
						images.length % 2 === 0 ? images.length / 2 : images.length / 2 + 1
					)
					.map((key) => {
						return <Img key={key} src={key} />;
					})}
			</Col>
			<Col>
				{images
					.slice(
						images.length % 2 === 0 ? images.length / 2 : images.length / 2 + 1
					)
					.map((key) => {
						return <Img key={key} src={key} />;
					})}
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
