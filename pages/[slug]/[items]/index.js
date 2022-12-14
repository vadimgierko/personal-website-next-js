import Head from "next/head";
// react bootstrap:
import Container from "react-bootstrap/Container";
// custom components:
// atoms:
import Icon from "../../../components/atoms/Icon";
import Card from "../../../components/atoms/Card";
import YouTubeVideo from "../../../components/atoms/YouTubeVideo";
import SoundCloudAudio from "../../../components/atoms/SoundCloudAudio";
// molecules:
import Gallery from "../../../components/molecules/Gallery";
// lib:
import getPageContent from "../../../lib/getPageContent";
// content:
import { icons } from "../../../content/icons";
import { fieldsOfInterests } from "../../../content/fieldsOfInterests";

export default function Items(props) {
	const { title, icon, itemsType, items } = props;

	return (
		<>
			<Head>
				<title>
					Vadim Gierko | {title} |{" "}
					{itemsType === "projects"
						? "Projekty (Projects)"
						: itemsType === "articles"
						? "Artykuły (Articles)"
						: itemsType === "videos"
						? "Filmy (Videos)"
						: itemsType === "images"
						? "Galeria (Gallery)"
						: "Nagrania (Audios)"}
				</title>
			</Head>
			<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
				{icon && <Icon IconType={icons[icon].Icon} size={100} />}
				<h1>{title}</h1>
				<hr />
				<h2 className="mb-3">
					{itemsType === "projects"
						? "Projekty (Projects)"
						: itemsType === "articles"
						? "Artykuły (Articles)"
						: itemsType === "videos"
						? "Filmy (Videos)"
						: itemsType === "images"
						? "Galeria (Gallery)"
						: "Nagrania (Audios)"}
				</h2>
				<main>
					{items && items.length && itemsType !== "images" ? (
						items.map((item, i) => {
							return itemsType === "videos" ? (
								<YouTubeVideo
									key={item.title}
									className="mb-3"
									width={item.width}
									height={item.height}
									id={item.id}
									title={item.title}
									description={item.description}
								/>
							) : itemsType === "audios" ? (
								<SoundCloudAudio
									key={item.src}
									src={item.src}
									className="mb-3"
								/>
							) : (
								<Card
									key={item.title}
									item={item}
									left={i % 2 !== 0}
									linkText={
										itemsType === "projects" ? "Więcej info" : "Czytaj dalej"
									}
								/>
							);
						})
					) : itemsType !== "images" ? (
						<p>There are no {itemsType} yet...</p>
					) : null}
					{items && itemsType === "images" ? <Gallery images={items} /> : null}
				</main>
			</Container>
		</>
	);
}

export async function getStaticPaths() {
	const slugs = [];
	fieldsOfInterests.forEach((field) => {
		["projects", "articles", "videos", "audios"].forEach((itemsType) =>
			slugs.push({ params: { slug: field.link.slice(1), items: itemsType } })
		);
	});
	// add visual thinking gallery to slugs:
	slugs.push({ params: { slug: "visual-thinking", items: "images" } });
	const paths = slugs;

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const pageContent = getPageContent(params.slug);
	const { title, icon } = pageContent;
	const itemsType = params.items;
	const items = pageContent[itemsType] ? pageContent[itemsType] : null;

	return {
		props: {
			title,
			icon,
			itemsType,
			items,
		},
	};
}
