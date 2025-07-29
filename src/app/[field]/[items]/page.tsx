// react bootstrap:
import Container from "react-bootstrap/Container";
// custom components:
// atoms:
import Icon from "@/components/atoms/Icon";
import Card from "@/components/atoms/Card";
import YouTubeVideo from "@/components/atoms/YouTubeVideo";
import SoundCloudAudio from "@/components/atoms/SoundCloudAudio";
// molecules:
import Gallery from "@/components/molecules/Gallery";
// lib:
import getPageContent from "@/lib/getPageContent";
// content:
import { icons } from "@/content/icons";
import { notFound } from "next/navigation";
import { FieldOfInterest, ItemsType } from "@/types";
import { fieldsOfInterests } from "@/content/fieldsOfInterests";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ field: string; items: ItemsType }>;
}) {
	const field = (await params).field;
	const pageData = getPageContent(field);

	if (!pageData) return {};

	const { pageContent } = pageData;
	const { title } = pageContent;
	const itemsType = (await params).items;

	return {
		title: `Vadim Gierko | ${title} |
          ${
						itemsType === "projects"
							? "Projekty (Projects)"
							: itemsType === "articles"
							? "Artykuły (Articles)"
							: itemsType === "videos"
							? "Filmy (Videos)"
							: itemsType === "images"
							? "Galeria (Gallery)"
							: "Nagrania (Audios)"
					}`,
	};
}

export default async function ItemsPage({
	params,
}: {
	params: Promise<{
		field: string;
		items: ItemsType;
	}>;
}) {
	//====================== FIELD DATA ====================//
	const fieldSlug = (await params).field; // ❗❗❗

	const fieldObject = fieldsOfInterests.find((f) => f.link === "/" + fieldSlug);

	if (!fieldObject) return notFound();

	const { title, icon } = fieldObject;

	//====================== ITEMS DATA ====================//
	const itemsType = (await params).items;

	const items = fieldObject[itemsType];

	if (!items || (items && !items.length)) return notFound();

	return (
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
				{/** ==================== ARTICLES ================= */}
				{itemsType === "articles" &&
					fieldObject["articles"] &&
					fieldObject.articles.map((item, i) => (
						<Card
							key={item.title}
							item={item}
							left={i % 2 !== 0}
							linkText="Czytaj dalej"
						/>
					))}
				{/** ==================== PROJECTS ================= */}
				{itemsType === "projects" &&
					fieldObject["projects"] &&
					fieldObject["projects"].map((item, i) => (
						<Card
							key={item.title}
							item={item}
							left={i % 2 !== 0}
							linkText="Więcej info"
						/>
					))}
				{/** ==================== VIDEOS ================= */}
				{itemsType === "videos" &&
					fieldObject["videos"] &&
					fieldObject["videos"].map((item) => (
						<YouTubeVideo
							key={item.title}
							className="mb-3"
							width={item.width}
							height={item.height}
							id={item.id}
							title={item.title}
							description={item.description}
						/>
					))}
				{/** ==================== AUDIOS ================= */}
				{itemsType === "audios" &&
					fieldObject["audios"] &&
					fieldObject["audios"].map((item) => (
						<SoundCloudAudio key={item.src} src={item.src} className="mb-3" />
					))}
				{/** ==================== IMAGES ================= */}
				{itemsType === "images" && fieldObject["images"] && (
					<Gallery images={fieldObject["images"]} />
				)}
			</main>
		</Container>
	);
}
