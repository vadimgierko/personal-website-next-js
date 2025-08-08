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
import { allowedItemsTypes, FieldName, ItemsType } from "@/types";
import { getFieldItemBySlug } from "@/components/organisms/FieldOfInterests";
import { content } from "@/content/content";

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
	//const pageData = getPageContentExperimental({ slug, from: "object" });
	//=== ❗❗❗ 👇TODO: EXTRACT AS getPageMetadata(slug)👇 ===❗❗❗
	const slugPageData = content.pages[slug];

	if (!slugPageData || slugPageData.pageType !== "field") return {};

	const slugPageMetadata = content.fields[slug as FieldName].metadata;
	//=== ❗❗❗ 👆TODO: EXTRACT AS getPageMetadata(slug)👆 ===❗❗❗

	const itemsType = (await params).items;

	return {
		title: `Vadim Gierko | ${slugPageMetadata.title} |
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
	const params: ItemsPageParams[] = [];

	Object.keys(content.fields).forEach((fieldName) =>
		allowedItemsTypes.forEach((itemsType) =>
			params.push({ slug: fieldName, items: itemsType })
		)
	);

	return params;
}

export default async function ItemsPage({
	params,
}: {
	params: Promise<ItemsPageParams>;
}) {
	//====================== FIELD DATA ====================//
	const slug = (await params).slug; // ❗❗❗

	// const fieldObject = fieldsOfInterests.find((f) => f.link === "/" + fieldSlug);
	const pageData = content.pages[slug];

	if (!pageData || pageData.pageType !== "field") return notFound();

	const field = content.fields[slug as FieldName];

	//====================== ITEMS DATA ====================//
	const itemsType = (await params).items;

	const items = field.items[itemsType];

	if (!items || (items && !items.length)) return notFound();

	return (
		<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
			{field.props.icon && (
				<Icon IconType={icons[field.props.icon].Icon} size={100} />
			)}
			<h1>{field.metadata.title}</h1>
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
				{field.items[itemsType] &&
					field.items[itemsType].map((itemSlug, i) => {
						const item = getFieldItemBySlug({ slug: itemSlug, itemsType });

						if (!item) return null;

						/** ==================== ARTICLES / PROJECTS ================= */
						if (itemsType === "articles" || itemsType === "projects")
							return (
								<Card
									key={item.metadata.title}
									item={item}
									left={i % 2 !== 0}
									linkText={
										itemsType === "articles" ? "Czytaj dalej" : "Więcej info"
									}
								/>
							);
						/** ==================== VIDEOS ================= */
						if (itemsType === "videos" && item.itemType === "video")
							return (
								<YouTubeVideo
									key={item.metadata.title}
									className="mb-3"
									width={item.props.width}
									height={item.props.height}
									id={item.props.id}
									title={item.metadata.title}
									description={item.metadata.description}
								/>
							);

						/** ==================== AUDIOS ================= */
						if (itemsType === "audios" && item.itemType === "audio")
							return (
								<SoundCloudAudio
									key={item.props.src}
									src={item.props.src}
									className="mb-3"
								/>
							);
					})}

				{/** ==================== IMAGES ================= */}
				{itemsType === "images" && field.items.images.length > 0 && (
					<Gallery images={field.items.images} />
				)}
			</main>
		</Container>
	);
}
