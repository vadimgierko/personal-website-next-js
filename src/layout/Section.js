"use client";

import { useTheme } from "../context/useTheme";
import { Container } from "react-bootstrap";

export default function Section({ children = "" }) {
	const { theme } = useTheme();

	if (!children) return null;

	return (
		<section className={theme}>
			<Container className="py-3" style={{ maxWidth: 900 }}>
				{children}
			</Container>
		</section>
	);
}
