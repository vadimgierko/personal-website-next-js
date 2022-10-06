import { useEffect, useState } from "react";
import Head from "next/head";
// icons bank:
import { icons } from "../content/icons";
// custom components:
import Layout from "../layout";
import Section from "../layout/Section";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Icon from "../components/Icon";
// react-bootstrap:
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// next.js:
import Link from "next/link";
// lib:
import getEssentialFieldsData from "../lib/getEssentialFieldData";

export default function Home({ bio, fieldsOfInterests }) {
	const [windowHeight, setWindowHeight] = useState();

	useEffect(() => {
		setWindowHeight(globalThis.window.innerHeight - 70);
	}, []);

	return (
		<>
			<header>
				<Container
					className="d-flex flex-column justify-content-center align-items-center text-center"
					style={{
						minHeight: windowHeight,
					}}
				>
					<Image
						src={bio.img}
						roundedCircle
						style={{ width: 200 }}
						className="shadow"
						alt="Vadim Gierko's avatar"
					/>
					<div style={{ maxWidth: 500 }}>
						<h1 className="my-3">{bio.title}</h1>
						<MarkdownRenderer markdown={bio.description} />
					</div>
				</Container>
			</header>
			{fieldsOfInterests.map((field) => (
				<Section key={field.link}>
					{field.icon && <Icon IconType={icons[field.icon].Icon} size={80} />}
					{field.title && <h2 className="text-center my-3">{field.title}</h2>}
					{field.description && (
						<MarkdownRenderer markdown={field.description} />
					)}
					<Link href={field.link}>Więcej info</Link>
				</Section>
			))}
		</>
	);
}

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

	return {
		props: {
			bio,
			fieldsOfInterests: getEssentialFieldsData(),
		},
	};
}
