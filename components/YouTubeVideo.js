export default function YouTubeVideo({ videoProps }) {
	return (
		<iframe
			{...videoProps}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
}
