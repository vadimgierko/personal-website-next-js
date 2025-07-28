"use client";
import { useLayoutEffect, useRef, useState } from "react";

type YouTubeVideoProps = {
	width: string;
	height: string;
	id: string;
	title: string;
	description: string;
	className: string;
};

export default function YouTubeVideo({
	width,
	height,
	id,
	title,
	description,
	className,
}: YouTubeVideoProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [newHeight, setNewHeight] = useState<number | undefined>(undefined);

	// set new height when the component is mounted:
	useLayoutEffect(() => {
		if (ref.current) {
			setNewHeight((ref.current.offsetWidth * Number(height)) / Number(width));
		}
	}, [height, width]);

	// set new height after every resize
	useLayoutEffect(() => {
		const handleResize = () => {
			if (ref.current) {
				setNewHeight(
					(ref.current.offsetWidth * Number(height)) / Number(width)
				);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
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
