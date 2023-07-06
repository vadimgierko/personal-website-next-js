import { useState, useEffect } from "react";
import { useTheme } from "../contexts/useTheme";
// next.js:
import Head from "next/head";
// custom components:
// layout:
import Footer from "./Footer";
import Navbar from "./Navbar";
// atoms:
import ScrollToTop from "../components/atoms/ScrollToTop";

export default function Layout({ children }) {
	const { theme, setTheme } = useTheme();

	// uncomment the code below to enable detecting dark mode preferences::
	//const [isDarkModePrefered, setIsDarkModePrefered] = useState();

	// useEffect(() => {
	// 	const userPrefersDarkMode = () =>
	// 		window.matchMedia &&
	// 		window.matchMedia("(prefers-color-scheme: dark)").matches;
	// 	console.log("Does user prefer dark mode?", userPrefersDarkMode());
	// 	setIsDarkModePrefered(userPrefersDarkMode());
	// }, []);

	// useEffect(() => {
	// 	if (isDarkModePrefered) {
	// 		setTheme("dark");
	// 		console.log("App: switched to the dark mode.");
	// 	}
	// }, [isDarkModePrefered, setTheme]);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="author" content="Vadim Gierko" />
				<link
					rel="icon"
					href="https://vadimgierko.com/vadim-gerko-zdjecie-cv.jpg"
				/>
			</Head>
			<div
				className={`bg-${theme}`}
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
						display: "flex",
						flexDirection: "column",
						paddingTop: 70,
						flexGrow: 1,
						color: theme === "light" ? "dark" : "light",
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
