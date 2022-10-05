import { useState, useEffect } from "react";
import { useTheme } from "../contexts/useTheme";
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
				<ScrollToTop />
			</main>
			<Footer />
		</div>
	);
}
