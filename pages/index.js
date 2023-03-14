import { useEffect, useState } from "react";
// icons bank:
import { icons } from "../content/icons";
// custom components:
// layout:
import Section from "../layout/Section";
// atoms:
import MarkdownRenderer from "../components/atoms/MarkdownRenderer";
import Icon from "../components/atoms/Icon";
// react-bootstrap:
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// next.js:
import Head from "next/head";
import Link from "next/link";
import getEssentialFieldsData from "../lib/getEssentialFieldData";

export default function Home({ bio, fieldsOfInterests }) {
	const [windowHeight, setWindowHeight] = useState();

	useEffect(() => {
		setWindowHeight(globalThis.window.innerHeight - 70);
	}, []);

	return (
		<>
			<Head>
				<title>Vadim Gierko</title>
				<meta
					name="description"
					content="Vadim Gierko's personal website developed with Next.js"
				/>
				<meta property="og:title" content="Vadim Gierko" />
				<meta
					property="og:description"
					content="Visit my personal website and get to know me better!"
				/>
				<meta
					property="og:image"
					content="https://www.vadimgierko.com/img/web-development/projects/vadimgierko-com-personal-website-next-js-screen-vadim-gierko.png"
				/>
			</Head>
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
			{fieldsOfInterests?.map((field) => (
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

Programuję, komponuję, tworzę notatki wizualne i mapy myśli, zgłębiam tajniki Zarządzania Procesem Twórczym oraz uczę się czegoś nowego każdego dnia.
		
Od ponad 2 lat skupiam się praktycznie wyłącznie na programowaniu webowym. Uwielbiam programowanie za to, że pozwala urzeczywistnić każdy szalony pomysł oraz rozwiązać każdy praktyczny problem.		
		`,
	};

	const fieldsOfInterests = getEssentialFieldsData();

	return {
		props: {
			bio,
			fieldsOfInterests,
		},
	};
}
