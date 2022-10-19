// react-bootstrap:
import Container from "react-bootstrap/Container";
// content:
import { icons } from "../content/icons";
// custom components:
import Section from "../layout/Section";
import CardsList from "./CardsList";
import MarkdownRenderer from "./MarkdownRenderer";
import IconsList from "./IconsList";
import Icon from "./Icon";
import YouTubeVideo from "./YouTubeVideo";
import SoundCloudAudio from "./SoundCloudAudio";
// react-icons:
import { AiOutlineFolder, AiOutlineYoutube } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
// next.js:
import Link from "next/link";

export default function FieldOfInterests({ field }) {
	return (
		<>
			<header>
				<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
					{field.icon && <Icon IconType={icons[field.icon].Icon} size={100} />}
					<h1>{field.title}</h1>
					<hr />
					<p>{field.description}</p>
				</Container>
			</header>
			<main>
				{field.content && (
					<Section>
						<MarkdownRenderer markdown={field.content} />
					</Section>
				)}
				{field.skills && (
					<Section>
						<FaGraduationCap size={80} />
						<h2 className="text-center my-3">Umiejętności</h2>
						<IconsList skills={field.skills} />
					</Section>
				)}
				{field.projects && (
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
				{field.articles && (
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
				{field.videos && (
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
				{field.audios && (
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
			</main>
		</>
	);
}
