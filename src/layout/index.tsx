import ScrollToTop from "@/components/atoms/ScrollToTop";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { NavigationBar } from "./Navbar";
import { Domain } from "@/types";

export default function Layout({
	children,
	localStorageThemeKey,
	layout,
}: {
	children: ReactNode;
	localStorageThemeKey: Domain["localStorageThemeKey"];
	layout: Domain["layout"];
}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<NavigationBar
				localStorageThemeKey={localStorageThemeKey}
				brand={layout.navbar.brand}
				links={layout.navbar.links}
			/>
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
			<Footer {...layout.footer} />
		</div>
	);
}
