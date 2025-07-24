import Footer from "@/layout/Footer";
import Navbar from "@/layout/Navbar";
import ScrollToTop from "@/components/atoms/ScrollToTop";
import { ReactNode } from "react";

export default function Layout({ children }: {children: ReactNode}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Navbar />
			<main
				style={{
					display: "flex",
					flexDirection: "column",
					paddingTop: 70,
					flexGrow: 1,
				}}
			>
				{children}
			</main>
			<ScrollToTop />
			<Footer />
		</div>
	);
}
