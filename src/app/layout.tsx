import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Layout from "@/layout/index";
import { ThemeProvider } from "@/context/useTheme";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
	title: "Vadim Gierko",
	description: "Strona internetowa Vadima Gierko",
	authors: { name: "Vadim Gierko" },
	icons: "https://vadimgierko.com/vadim-gierko-avatar.jpg",
	openGraph: {
		title: "Vadim Gierko",
		description: "Vadim Gierko's personal website",
		images: "https://www.vadimgierko.com/img/web-development/projects/vadimgierko-com-personal-website-next-js-screen-vadim-gierko.png"
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body>
				<ThemeProvider>
					<Layout>{children}</Layout>
				</ThemeProvider>
			</body>
			<GoogleAnalytics gaId="G-SDYR1XY35B" />
		</html>
	);
}
