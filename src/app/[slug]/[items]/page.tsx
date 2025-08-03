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
// content:
import { icons } from "@/content/icons";
import { notFound } from "next/navigation";
import { FieldOfInterest, ItemsType } from "@/types";
import { fieldsOfInterests } from "@/content/fieldsOfInterests";
import getPageContentExperimental from "@/content/experimental-static-cms/lib/getPageContentExperimental";

type ItemsPageParams = { slug: string; items: ItemsType };

export async function generateMetadata({
	params,
}: {
	params: Promise<ItemsPageParams>;
}) {
	const slug = (await params).slug;
	// BEFORE:
	// const pageData = getPageContentExperimental({ slug, from: "array" });
	// =>
	const pageData = getPageContentExperimental({ slug, from: "object" });

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

export async function generateStaticParams() {
	// generate slugs only for all fields available items
	const itemsNames: ItemsType[] = [
		"articles",
		"audios",
		"images",
		"projects",
		"videos",
	];
	const params: ItemsPageParams[] = [];

	fieldsOfInterests.forEach((field) => {
		itemsNames.forEach((itemsName) =>
			params.push({ slug: field.link.slice(1), items: itemsName })
		);
	});

	return params;
}

export default async function ItemsPage({
	params,
}: {
	params: Promise<ItemsPageParams>;
}) {
	//====================== FIELD DATA ====================//
	const fieldSlug = (await params).slug; // ❗❗❗

	// const fieldObject = fieldsOfInterests.find((f) => f.link === "/" + fieldSlug);
	const pageData = getPageContentExperimental({
		slug: fieldSlug,
		from: "object",
	});

	if (!pageData) return notFound();

	const fieldObject = pageData.pageContent as FieldOfInterest;

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
