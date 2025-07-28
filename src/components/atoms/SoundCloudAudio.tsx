export default function SoundCloudAudio({
	src,
	className,
}: {
	src: string;
	className: string;
}) {
	return (
		<div className={className}>
			<iframe
				width="100%"
				height="166"
				scrolling="no"
				frameBorder="no"
				src={src}
			></iframe>
		</div>
	);
}
