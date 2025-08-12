// react-bootstrap:
import Container from "react-bootstrap/Container";
// content:
import { icons } from "../../content/icons";
// custom components:
// layout:
import Section from "../../layout/Section";
// atoms:
import MarkdownRenderer from "../atoms/MarkdownRenderer";
import Icon from "../atoms/Icon";
import YouTubeVideo from "../atoms/YouTubeVideo";
import SoundCloudAudio from "../atoms/SoundCloudAudio";
// molecules:
import CardsList from "../molecules/CardsList";
import IconsList from "../molecules/IconsList";
import Gallery from "../molecules/Gallery";
// react-icons:
import { AiOutlineFolder, AiOutlineYoutube } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { BsImages } from "react-icons/bs";
// next.js:
import Link from "next/link";
import { Audio, Category, Video, ItemsType } from "@/types";
import { content } from "@/content/content";

// function getFieldItems(field: Field): NewItem[] {
// 	const items: NewItem[] = [];

// 	Object.keys(field.items).forEach((itemsType) =>
// 		Object.keys(content.items[itemsType as ItemsType]).forEach((slug) =>
// 			items.push(content.items[itemsType as ItemsType][slug])
// 		)
// 	);

// 	return items;
// }

export function getFieldItemBySlug({
	slug,
	itemsType,
}: {
	slug: string;
	itemsType: ItemsType;
}) {
	const item = content.items[itemsType][slug];

	if (!item) return undefined;

	return item;
}

export default function FieldOfInterests({ field }: { field: Category }) {
	return (
		<>
			<header>
				<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
					{field.props.icon && (
						<Icon IconType={icons[field.props.icon].Icon} size={100} />
					)}
					<h1>{field.metadata.title}</h1>
					<hr />
					<MarkdownRenderer markdown={field.metadata.description} />
				</Container>
			</header>
			<main>
				{/** ===================== SKILLS ================== */}
				{field.props.skills.length > 0 && (
					<Section>
						<FaGraduationCap size={80} />
						<h2 className="text-center my-3">Umiejętności</h2>
						<IconsList skills={field.props.skills} />
					</Section>
				)}
				{/** ===================== ITEMS (except images) ================== */}

				{field.items.projects.length > 0 && (
					<Section>
						<AiOutlineFolder size={80} />
						<h2 className="text-center my-3">Projekty</h2>
						<CardsList
							items={field.items.projects
								.slice(0, 3)
								.map((slug) =>
									getFieldItemBySlug({ slug, itemsType: "projects" })
								)
								.filter((item) => item !== undefined)}
							linkText="Więcej info"
						/>
						<Link href={field.metadata.link + "/projects"}>
							Więcej projektów
						</Link>
					</Section>
				)}
				{field.items.articles.length > 0 && (
					<Section>
						<RiArticleLine size={80} />
						<h2 className="text-center my-3">Artykuły</h2>
						<CardsList
							items={field.items.articles
								.slice(0, 3)
								.map((slug) =>
									getFieldItemBySlug({ slug, itemsType: "articles" })
								)
								.filter((item) => item !== undefined)}
							linkText="Czytaj dalej"
						/>
						<Link href={field.metadata.link + "/articles"}>
							Więcej artykułów
						</Link>
					</Section>
				)}
				{field.items.videos.length > 0 && (
					<Section>
						<AiOutlineYoutube size={80} />
						<h2 className="text-center my-3">Filmy</h2>
						{field.items.videos
							.slice(0, 3)
							.map((slug) => getFieldItemBySlug({ slug, itemsType: "videos" }))
							.map((v) => {
								const video = v as Video;
								return (
									<YouTubeVideo
										key={video.metadata.title}
										className="mb-3"
										width={video.props.width}
										height={video.props.height}
										id={video.props.id}
										title={video.metadata.title}
										description={video.metadata.description}
									/>
								);
							})}
						<Link href={field.metadata.link + "/videos"}>Więcej filmów</Link>
					</Section>
				)}
				{field.items.audios.length > 0 && (
					<Section>
						<GiMusicalNotes size={80} />
						<h2 className="text-center my-3">Nagrania</h2>
						{field.items.audios
							.slice(0, 3)
							.map((slug) => getFieldItemBySlug({ slug, itemsType: "audios" }))
							.map((a) => {
								const audio = a as Audio;

								return (
									<SoundCloudAudio
										key={audio.props.src}
										className="mb-3"
										src={audio.props.src}
									/>
								);
							})}
						<Link href={field.metadata.link + "/audios"}>Więcej nagrań</Link>
					</Section>
				)}

				{/**========================== IMAGES ====================== */}
				{field.metadata.link === "/visual-thinking" && (
					<Section>
						<BsImages size={80} />
						<h2 className="text-center my-3">Galeria</h2>
						{field.items.images && (
							<Gallery images={field.items.images.slice(0, 4)} />
						)}
						<Link href={field.metadata.link + "/images"}>Więcej zdjęć</Link>
					</Section>
				)}
			</main>
		</>
	);
}
