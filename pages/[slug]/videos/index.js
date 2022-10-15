import { useEffect, useState } from "react";
// next.js:
import { useRouter } from "next/router";
// react bootstrap:
import Container from "react-bootstrap/Container";
// custom components:
import Icon from "../../../components/Icon";
import YouTubeVideo from "../../../components/YouTubeVideo";
// lib:
import getPageContent from "../../../lib/getPageContent";
// content:
import { icons } from "../../../content/icons";
import { fieldsOfInterests } from "../../../content/fieldsOfInterests";

export default function VideosList(props) {
	const { title, icon, videos } = props;

	return (
		<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
			{icon && <Icon IconType={icons[icon].Icon} size={100} />}
			<h1>{title}</h1>
			<hr />
			<h2 className="mb-3">Filmy (Videos)</h2>
			{videos && videos.length ? (
				videos.map((video) => (
					<YouTubeVideo
						key={video.title}
						className="mb-3"
						width={video.width}
						height={video.height}
						id={video.id}
						title={video.title}
						description={video.description}
					/>
				))
			) : (
				<p>There are no videos yet...</p>
			)}
		</Container>
	);
}

export async function getStaticPaths() {
	const fieldsSlugs = [];
	fieldsOfInterests.forEach((field) =>
		fieldsSlugs.push({ params: { slug: field.link.slice(1) } })
	);
	const paths = fieldsSlugs;

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const pageContent = getPageContent(params.slug);
	const { title, icon } = pageContent;
	const videos = pageContent.videos ? pageContent.videos : null;

	return {
		props: {
			title,
			icon,
			videos,
		},
	};
}
