export default function SoundCloudAudio({ title, src, link }) {
	return (
		<div>
			<iframe
				width="100%"
				height="166"
				scrolling="no"
				frameborder="no"
				allow="autoplay"
				src={src}
			></iframe>
			<div
				style={{
					fontSize: "10px",
					color: "#cccccc",
					lineBreak: "anywhere",
					wordBreak: "normal",
					overflow: "hidden",
					whiteSpace: "nowrap",
					textOverflow: "ellipsis",
				}}
			>
				<a
					href="https://soundcloud.com/vadimgierko"
					title="Vadim Gierko"
					target="_blank"
					rel="noreferrer"
					style="color: #cccccc; text-decoration: none;"
				>
					Vadim Gierko
				</a>{" "}
				·{" "}
				<a href={link} title={title} target="_blank" rel="noreferrer">
					{title}
				</a>
			</div>
		</div>
	);
}
