import { useState, useEffect } from "react";
import { useTheme } from "../contexts/useTheme";
// next.js:
import Head from "next/head";
// custom components:
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout({ children }) {
	const { theme, setTheme } = useTheme();
	const [isDarkModePrefered, setIsDarkModePrefered] = useState();

	// DARK MODE:
	useEffect(() => {
		const userPrefersDarkMode = () =>
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		console.log("Does user prefer dark mode?", userPrefersDarkMode());
		setIsDarkModePrefered(userPrefersDarkMode());
	}, []);

	useEffect(() => {
		if (isDarkModePrefered) {
			setTheme("dark");
			console.log("App: switched to the dark mode.");
		}
	}, [isDarkModePrefered, setTheme]);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="author" content="Vadim Gierko" />
				<link rel="icon" href="/vadim-gerko-zdjecie-cv.jpg" />
			</Head>
			<div
				className={theme === "light" ? "bg-light" : "bg-dark"}
				style={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<Navbar />
				<main
					className={
						theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
					}
					style={{
						paddingTop: 70,
						flexGrow: 1,
						color: theme === "light" ? "black" : "white",
					}}
				>
					{children}
				</main>
				<ScrollToTop />
				<Footer />
			</div>
		</>
	);
}
