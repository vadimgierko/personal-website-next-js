import { useTheme } from "../contexts/useTheme";
import Footer from "./Footer";
import Navbar from "./Navbar";
//import ScrollToTop from "../components/ScrollToTop";

export default function Layout({ children }) {
	const { theme } = useTheme();

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
				{/* <ScrollToTop /> */}
			</main>
			<Footer />
		</div>
	);
}
