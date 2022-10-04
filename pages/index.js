import Head from "next/head";
// content data:
import { fieldsOfInterests } from "../content/fieldsOfInterests";
import { icons } from "../content/icons";
// custom components:
import Section from "../layout/Section";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Icon from "../components/Icon";
// react-bootstrap:
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// next.js:
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
	const bio = {
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

	function getEssentialFieldsData(fields) {
		if (!fields || !fields.length) return;
		let essentialData = [];
		fields.forEach((field) =>
			essentialData.push({
				title: field.title,
				description: field.description,
				link: field.link,
				icon: field.icon,
			})
		);
		return essentialData;
	}

	const content = {
		bio,
		fieldsOfInterests: getEssentialFieldsData(fieldsOfInterests),
	};

	return {
		props: {
			content,
		},
	};
}

export default function Home({ content }) {
	const [windowHeight, setWindowHeight] = useState();

	useEffect(() => {
		setWindowHeight(globalThis.window.innerHeight - 70);
	}, []);
	//console.log("passed content:", content);
	if (!content) return null;
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
					style={{
						minHeight: windowHeight,
					}}
				>
					<Image
						src={content.bio.img}
						roundedCircle
						style={{ width: 200 }}
						className="shadow"
						alt="Vadim Gierko's avatar"
					/>
					<div style={{ maxWidth: 500 }}>
						<h1 className="my-3">{content.bio.title}</h1>
						<MarkdownRenderer markdown={content.bio.description} />
					</div>
				</Container>
			</header>
			{content.fieldsOfInterests.map((field) => (
				<Section key={field.link}>
					{field.icon && <Icon IconType={icons[field.icon].Icon} size={80} />}
					{field.title && <h2 className="text-center my-3">{field.title}</h2>}
					{field.description && (
						<MarkdownRenderer markdown={field.description} />
					)}
					<Link href={field.link}>Więcej info</Link>
				</Section>
			))}
		</div>
	);
}
