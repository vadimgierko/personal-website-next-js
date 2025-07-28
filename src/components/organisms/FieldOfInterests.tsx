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
import { FieldOfInterest } from "@/types";

export default function FieldOfInterests({
	field,
}: {
	field: FieldOfInterest;
}) {
	return (
		<>
			<header>
				<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
					{field.icon && <Icon IconType={icons[field.icon].Icon} size={100} />}
					<h1>{field.title}</h1>
					<hr />
					<MarkdownRenderer markdown={field.description} />
				</Container>
			</header>
			<main>
				{field.skills.length > 0 && (
					<Section>
						<FaGraduationCap size={80} />
						<h2 className="text-center my-3">Umiejętności</h2>
						<IconsList skills={field.skills} />
					</Section>
				)}
				{field.projects.length > 0 && (
					<Section>
						<AiOutlineFolder size={80} />
						<h2 className="text-center my-3">Projekty</h2>
						<CardsList
							items={field.projects.slice(0, 3)}
							linkText="Więcej info"
						/>
						<Link href={field.link + "/projects"}>Więcej projektów</Link>
					</Section>
				)}
				{field.articles.length > 0 && (
					<Section>
						<RiArticleLine size={80} />
						<h2 className="text-center my-3">Artykuły</h2>
						<CardsList
							items={field.articles.slice(0, 3)}
							linkText="Czytaj dalej"
						/>
						<Link href={field.link + "/articles"}>Więcej artykułów</Link>
					</Section>
				)}
				{field.videos.length > 0 && (
					<Section>
						<AiOutlineYoutube size={80} />
						<h2 className="text-center my-3">Filmy</h2>
						{field.videos.slice(0, 3).map((video) => (
							<YouTubeVideo
								key={video.title}
								className="mb-3"
								width={video.width}
								height={video.height}
								id={video.id}
								title={video.title}
								description={video.description}
							/>
						))}
						<Link href={field.link + "/videos"}>Więcej filmów</Link>
					</Section>
				)}
				{field.audios.length > 0 && (
					<Section>
						<GiMusicalNotes size={80} />
						<h2 className="text-center my-3">Nagrania</h2>
						{field.audios.slice(0, 3).map((audio) => (
							<SoundCloudAudio
								key={audio.src}
								className="mb-3"
								src={audio.src}
							/>
						))}
						<Link href={field.link + "/audios"}>Więcej nagrań</Link>
					</Section>
				)}
				{field.link === "/visual-thinking" && (
					<Section>
						<BsImages size={80} />
						<h2 className="text-center my-3">Galeria</h2>
						{field.images && <Gallery images={field.images.slice(0, 4)} />}
						<Link href={field.link + "/images"}>Więcej zdjęć</Link>
					</Section>
				)}
			</main>
		</>
	);
}
