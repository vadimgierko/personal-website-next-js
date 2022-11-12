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
// lib:
import { client, urlFor } from "../lib/sanity/client";

export default function Home({ home, fieldsOfInterests }) {
	const [windowHeight, setWindowHeight] = useState();

	useEffect(() => {
		setWindowHeight(globalThis.window.innerHeight - 70);
		console.log("fields from sanity & other props:", home, fieldsOfInterests);
	}, [fieldsOfInterests, home]);

	return (
		<>
			<Head>
				<title>{home.metaTitle}</title>
				<meta name="description" content={home.metaDescription} />
				<meta property="og:title" content={home.ogTitle} />
				<meta property="og:description" content={home.ogDescription} />
				<meta property="og:image" content={urlFor(home.ogImage)} />
			</Head>
			<header>
				<Container
					className="d-flex flex-column justify-content-center align-items-center text-center"
					style={{
						minHeight: windowHeight,
					}}
				>
					<Image
						src={urlFor(home.avatar)}
						roundedCircle
						style={{ width: 200 }}
						className="shadow"
						alt="Vadim Gierko's avatar"
					/>
					<div style={{ maxWidth: 500 }}>
						<h1 className="my-3">{home.title}</h1>
						<MarkdownRenderer markdown={home.description} />
					</div>
				</Container>
			</header>
			{fieldsOfInterests.map((field) => (
				<Section key={field.slug.current}>
					{field.icon && <Icon IconType={icons[field.icon].Icon} size={80} />}
					{field.title && <h2 className="text-center my-3">{field.title}</h2>}
					{field.description && (
						<MarkdownRenderer markdown={field.description} />
					)}
					<Link href={field.slug.current}>Więcej info</Link>
				</Section>
			))}
		</>
	);
}

export async function getStaticProps() {
	const homeQuery = '*[_type == "home"][0]';
	const home = await client.fetch(homeQuery);

	const fieldsQuery = '*[_type == "fieldOfInterests"] | order(order asc)'; // TODO: fetch only title, description, slug, icon
	const fieldsOfInterests = await client.fetch(fieldsQuery);

	return {
		props: {
			home,
			fieldsOfInterests,
		},
	};
}
