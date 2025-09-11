import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Layout from "@/layout/index";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cms } from "@/content/cms";
import { websiteConfig } from "../../website.config";

const domain = cms.domains.values[websiteConfig.domainName];

export function generateMetadata(): Metadata {
	const { title, description, authorName, favicon, openGraph } =
		domain.metadata;
	const metadata: Metadata = {
		title,
		description,
		authors: { name: authorName },
		icons: favicon,
		openGraph,
	};
	return metadata;
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl" data-bs-theme="dark" data-scroll-behavior="smooth">
			<body>
				<Layout
					localStorageThemeKey={domain.localStorageThemeKey}
					layout={domain.layout}
				>
					{children}
				</Layout>
			</body>
			{/* <GoogleAnalytics gaId={domain.gaId} /> */}
		</html>
	);
}
