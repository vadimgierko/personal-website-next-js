import Head from "next/head";
//import Image from "next/image";
import { useTheme } from "../contexts/useTheme";
// content data:
import { fieldsOfInterests } from "../content/fieldsOfInterests";
// custom components:
import Section from "../layout/Section";
import MarkdownRenderer from "../components/MarkdownRenderer";
// react-bootstrap:
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// helper functions:
import scrollToTop from "../helper-functions/scrollToTop";
import Link from "next/link";

const BIO = {
	img: "vadim-gerko-zdjecie-cv.jpg",
	title: "Cześć!",
	description: `
Nazywam się Vadim Gierko.

Jestem osobą o wielu zainteresowaniach i kompetencjach twórczo-intelektualnych,
którym poświęciłem dłuższe okresy mojego życia.

W każdym z tych obszarów dążę do osiągnięcia najwyższego poziomu w zakresie
wiedzy, umiejętności, kreatywności i wartości, którą mogę dać innym poprzez moje projekty.

Scrolluj dalej i poznaj mnie lepiej!
  `,
};

export default function Home() {
	return (
		<div>
			<Head>
				<title>Vadim Gierko</title>
				<meta name="author" content="Vadim Gierko" />
				<meta
					name="description"
					content="Vadim Gierko's personal website developed with Next.js"
				/>
				<link rel="icon" href="vadim-gerko-zdjecie-cv.jpg" />
			</Head>

			<header>
				<Container
					className="d-flex flex-column justify-content-center align-items-center text-center"
					style={{ minHeight: globalThis.window?.innerHeight - 70 }}
				>
					<Image
						src={BIO.img}
						roundedCircle
						style={{ width: 200 }}
						className="shadow"
						alt="Vadim Gierko's avatar"
					/>
					<div style={{ maxWidth: 500 }}>
						<h1 className="my-3">{BIO.title}</h1>
						<MarkdownRenderer markdown={BIO.description} />
					</div>
				</Container>
			</header>
			{fieldsOfInterests.map((field) => (
				<Section key={field.link}>
					{field.Icon && <field.Icon size={80} />}
					{field.title && <h2 className="text-center my-3">{field.title}</h2>}
					{field.description && (
						<MarkdownRenderer markdown={field.description} />
					)}
					<Link href={field.link} onClick={scrollToTop}>
						Więcej info
					</Link>
				</Section>
			))}
		</div>
	);
}
