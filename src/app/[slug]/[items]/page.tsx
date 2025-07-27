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
import { ItemsType } from "@/types";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string; items: ItemsType }>;
}) {
	const slug = (await params).slug;
	const pageData = getPageContent(slug);

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
		slug: string;
		items: ItemsType;
	}>;
}) {
	const slug = (await params).slug; // ❗❗❗
	const pageData = getPageContent(slug);
	if (!pageData) return notFound();

	const { pageContent } = pageData;
	const { title } = pageContent;
	const icon =
		"icon" in pageContent && pageContent.icon ? pageContent.icon : null;
	const itemsType = (await params).items;

	const items = (pageContent as Record<ItemsType, unknown[]>)[itemsType]
		? (pageContent as Record<ItemsType, unknown[]>)[itemsType]
		: null;

	if (!items) return notFound();

	console.log(itemsType);

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
				{items && items.length && itemsType !== "images" ? (
					(
						items as Array<
							| {
									title: string;
									width: number;
									height: number;
									id: string;
									description?: string;
							  } // videos
							| { src: string } // audios
							| { title: string } // projects/articles (minimal)
						>
					).map((item, i) => {
						return itemsType === "videos" ? (
							<YouTubeVideo
								key={(item as { title: string }).title}
								className="mb-3"
								width={(item as { width: number }).width}
								height={(item as { height: number }).height}
								id={(item as { id: string }).id}
								title={(item as { title: string }).title}
								description={(item as { description?: string }).description}
							/>
						) : itemsType === "audios" ? (
							<SoundCloudAudio
								key={(item as { src: string }).src}
								src={(item as { src: string }).src}
								className="mb-3"
							/>
						) : (
							<Card
								key={(item as { title: string }).title}
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
	);
}
