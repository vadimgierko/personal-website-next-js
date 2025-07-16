import { Button, Container, Form } from "react-bootstrap";
import { useTheme } from "../context/useTheme";

export default function Contact() {
	const { theme } = useTheme();

	return (
		<Container style={{ maxWidth: 900 }}>
			<header className="text-center">
				<h1>Napisz do mnie!</h1>
				<p>(Twoja wiadomość zostanie wysłana na moją skrzynkę mailową)</p>
				<hr />
			</header>

			<Form
				id="contactform"
				action="https://formsubmit.io/send/de5ca093-5a15-4668-a61a-3ab537cb474b"
				method="POST"
			>
				<Form.Group className="mb-3">
					<Form.Label>Podaj swoje imię:</Form.Label>
					<Form.Control
						className={
							theme === "dark" ? "text-light bg-dark" : "text-dark bg-light"
						}
						type="text"
						name="name"
						id="name"
						placeholder="John"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Podaj swój adres mailowy:</Form.Label>
					<Form.Control
						className={
							theme === "dark" ? "text-light bg-dark" : "text-dark bg-light"
						}
						type="email"
						name="email"
						id="email"
						placeholder="johndoe@gmail.com"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Napisz wiadomość:</Form.Label>
					<Form.Control
						className={
							theme === "dark" ? "text-light bg-dark" : "text-dark bg-light"
						}
						as="textarea"
						name="comment"
						id="comment"
						placeholder="Napisz do mnie kilka zdań tutaj..."
						rows={5}
						required
					/>
				</Form.Group>

				<input
					name="_formsubmit_id"
					type="text"
					style={{ display: "none" }}
				></input>
				<input
					name="_redirect"
					type="hidden"
					id="name"
					value="https://www.vadimgierko.com/email-sent-successfully"
				></input>

				<div className="d-grid">
					<Button variant="success" type="submit">
						Wyślij wiadomość
					</Button>
				</div>
			</Form>
		</Container>
	);
}
