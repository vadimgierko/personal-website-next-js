import Link from "next/link";
import { Container } from "react-bootstrap";

export default function EmailSentSuccessfully() {
	return (
		<Container className="text-center" style={{ maxWidth: 900 }}>
			<header className="text-success">
				<h1>
					Wiadomość została wysłana pomyślnie!
					<br />
					Do usłyszenia!
				</h1>
			</header>
			<hr />
			<p>Dziękuję za wysłanie wiadomości!</p>
			<p>
				Skontaktuję się z Tobą jak najszybciej, odpowiadając na podanego przez
				Ciebie maila!
			</p>
			<p className="text-end">
				Pozdrawiam,
				<br />
				<em>Vadim</em>
			</p>
			<p>
				<Link href="/">Powrót do strony głównej</Link>
			</p>
		</Container>
	);
}
