import { useLayoutEffect, useRef, useState } from "react";

export default function YouTubeVideo({
	width,
	height,
	id,
	title,
	description,
	className,
}) {
	const ref = useRef();
	const [newHeight, setNewHeight] = useState();

	// set new height when the component is mounted:
	useLayoutEffect(() => {
		setNewHeight((ref.current.offsetWidth * height) / width);
	}, [height, width]);

	// set new height after every resize
	useLayoutEffect(() => {
		window.addEventListener("resize", () =>
			setNewHeight((ref.current.offsetWidth * height) / width)
		);
	}, [height, width]);

	return (
		<div ref={ref} className={className}>
			<iframe
				width="100%"
				height={newHeight}
				src={"https://www.youtube.com/embed/" + id}
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<p>{description}</p>
			<hr />
		</div>
	);
}
